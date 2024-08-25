const axios = require('axios')
const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')

async function get_cat(){
    const url = core.getInput(url)
    const response = await axios.get(url); 
    core.notice(response.data.fact)
}

get_cat()