import { connect } from 'react-redux'
import {Footer} from "../components/Footer";


const mapStateToProps = state => ({
    todos: state.todos
})


export default connect(mapStateToProps, null)(Footer)