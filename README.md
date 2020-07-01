# Jobberry

## Description

An intermediatery server of [Github Jobs API](https://jobs.github.com/api) to bypass CORS.

Pass all query params from client to API.

https://github-jobs-middleman.now.sh/

## Usage

### /jobs

Get All Jobs

Equal with `/positions.json` in Github Jobs API.

#### Example

`https://github-jobs-middleman.now.sh/jobs?description=react`

_Equal with_

`https://jobs.github.com/positions.json?description=react`

### /jobs/:id

Get Specific Job based on Id

Equal with `/positions/ID.json` in Github Jobs API

#### Example

`https://github-jobs-middleman.now.sh/jobs/a4a03e31-b069-421c-ad0d-14f10fd6a1d3`

_Equal with_

`https://jobs.github.com/positions/a4a03e31-b069-421c-ad0d-14f10fd6a1d3.json`
