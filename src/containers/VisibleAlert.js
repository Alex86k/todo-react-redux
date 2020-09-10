import { connect } from 'react-redux'
import {Alert} from "../components/Alert";
import {HIDE_ALERT} from "../constants";

const mapStateToProps = state => ({
    alert: state.alert
})

const mapDispatchToProps = dispatch => ({
    hide: () => dispatch({type: HIDE_ALERT})
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert)