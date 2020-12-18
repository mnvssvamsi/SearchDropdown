import React, { useState } from 'react'
import './Search.css'
import Card from '../../UI/Card/Card'

const Search = (props) => {

    const [show, setShow] = useState(false)
    const [searchBox, setSearchBox] = useState('')
    const [showMore, setShowMore] = useState(false)
    const [addShowMore, setAddShowMore] = useState(true)
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

    let addItemHandler = () => {
        props.inputArray.push(searchBox)
    }


    let filteredOutput = props.inputArray.filter(item => {
        return item.toLowerCase().includes(searchBox.toLowerCase())
    })
    let showMoreHandler = () => {
        setShowMore(true)
        setAddShowMore(false)
    }
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
                            {
                                filteredOutput.length !== 0 || filteredOutput > 5
                                    ?
                                    <div>
                                        {filteredOutput.map(item => {
                                            return <p key={item} onClick={() => props.selected(item)}>{item}</p>
                                        }).slice(0, 5)}
                                        {
                                            addShowMore && <button className="showbtn" onClick={showMoreHandler}> Show more...</button> 
                                        }
                                        {
                                            showMore ?
                                                filteredOutput.map(item => {
                                                    return <p key={item} onClick={() => props.selected(item)}>{item}</p>
                                                }).slice(5)
                                                : null
                                        }
                                    </div>
                                    :
                                    <div>
                                        <p> {`${searchBox} not found`}</p>
                                        <button className="addbtn" onClick={addItemHandler} >Add {props.type}</button>
                                    </div>
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