const axios = require('axios')
const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')

async function get_cat(){
    const response = await axios.get('http://example.com'); 
    core.notice(response)
}

get_cat()