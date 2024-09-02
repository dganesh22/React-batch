import React from 'react'

function Ex2(props) {
    return (
        <div>
            <h3>Default Props in Functional Component</h3>
            <h4> { props.title } </h4>
            <h4> x = { props.x } </h4>
            <h4> y =  { props.y } </h4>
            <h4> isView =  { props.isView ? "true": "false" } </h4>
            <hr />

            <div>
                {
                    props.colors.map((item,index) => {
                        return (
                            <p key={index}> { item } </p>
                        )
                    })
                }
            </div>

            <hr />

            <div>
                <h3> name = { props.user.name } </h3>
            </div>
        </div>
    )
}


// default props -> support for functional components defaultprops willbe removed from future latest version 
Ex2.defaultProps = {
    title: "weclome to react",
    x: 13,
    y: 24,
    isView: false,
    colors: ["red", "green", "blue"],
    user: {
        id: 2,
        name: "John",
        address: {
            city: "bengaluru",
            zip: 560010
        }
    }
}

export default Ex2