import React from 'react'
import { connect } from 'react-redux'

const Store = (props) => {
    console.log(props);
    const {store} = props;
    return (
        <div>
            <h3>Redux Store</h3>
            <div style={{margin : 'auto', textAlign : 'initial', width : 'max-content'}}>
                <pre>{JSON.stringify(store, null, 4)}</pre>
            </div>
            <hr/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        store : state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Store);
