//import axios from 'axios';

const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')

function get_cat(){
    // const response = await axios.get('http://example.com');
    // return response
    core.notice('cat')
}

get_cat()