import React, { useState } from 'react'
import './Search.css'
import Card from '../../UI/Card/Card'

const Search = (props) => {

    const [show, setShow] = useState(false)
    const [searchBox, setSearchBox] = useState('')
    // const [filtered,setFiltered] = useState(false)

    function debounce(fn, time) {
        let timeoutId;
        return wrapper
        function wrapper(...args) {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                timeoutId = null
                fn(...args)
            }, time)
        }
    }
    let dropdownHandler = () => {
        setShow(!show)
    }
    let filterHandler = debounce((e) => {
        setSearchBox(e.target.value)
    }, 1000)

    let filteredOutput = props.inputArray.filter(item => {
        return item.toLowerCase().includes(searchBox.toLowerCase())
    })

    return (
        <div>
            <Card >
                <div>
                    <button className="dropbtn"
                        onClick={dropdownHandler} > {props.searchText}
                    </button>
                    {show ?
                        <div id="myDropdown" className="dropdown-content">
                            <input className="myInput" type="text" placeholder="Search.." id="myInput" onChange={filterHandler} />
                            {/* {props.countries.map(item => {
                                return <p onClick={() => props.selected(item)} value={item} key={item} >{item}</p>
                            })} */}
                            {
                                filteredOutput.length !== 0
                                    ?
                                    filteredOutput.map(item => {
                                        return <p key={item} onClick={() => props.selected(item)}>{item}</p>
                                    })
                                    :
                                    `${searchBox} not found `
                            }
                        </div>
                        : null
                    }
                </div>
            </Card>
        </div>
    )
}

export default Search