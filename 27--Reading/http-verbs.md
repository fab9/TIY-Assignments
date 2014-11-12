3 examples of each HTTP verb being used in the GitHub API:

###GET
- Returns the preferred README for a repository.
```
GET /repos/:owner/:repo/readme
```

- Returns the contents of a file or directory in a repository.
```
GET /repos/:owner/:repo/contents/:path
```

- Returns a 302 to a URL to download a tarball or zipball archive for a repository.
```
GET /repos/:owner/:repo/:archive_format/:ref
```


###POST
- Create an issue
```
POST /repos/:owner/:repo/issues
```

- Create a comment
```
POST /repos/:owner/:repo/issues/:number/comments
```

- Create a label
```
POST /repos/:owner/:repo/labels
```

###PUT
- Creates a new file in a repository
```
PUT /repos/:owner/:repo/contents/:path
```

- Updates a file in a repository
```
PUT /repos/:owner/:repo/contents/:path
```

- Replace all labels for an issue
```
PUT /repos/:owner/:repo/issues/:number/labels
```

###PATCH
- Updates the authenticated user
```
PATCH /user
```

- Edit an issue
```
PATCH /repos/:owner/:repo/issues/:number
```

- Edit a comment
```
PATCH /repos/:owner/:repo/issues/comments/:id
```

###DELETE
- Deletes a file in a repository
```
DELETE /repos/:owner/:repo/contents/:path
```

- Delete a label
```
DELETE /repos/:owner/:repo/labels/:name
```

- Remove all labels from an issue
```
DELETE /repos/:owner/:repo/issues/:number/labels
```
