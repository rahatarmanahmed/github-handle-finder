# github-handle-finder

Written before I realized [charleslai](https://github.com/charleslai/github-handle-finder) already did it.

Reads in names to check through standard input, and outputs the names that are available on GitHub.

**Note that one API request is made per name at a time. Be nice and don't abuse the API. GitHub API rate limits will apply.**

# Installation

Clone this repository and run `npm install`.

# Usage

```sh
# Print out the handles in dictionary.txt that are available
$ cat dictionary.txt | node index.js

# Make requests with your access token
$ export API_KEY=XXXXXXXX
$ cat dictionary.txt | node index.js

# Print out available handles that are 1-3 character long words
$ grep -E "^\w{1,3}$" /usr/share/dict/words | tr '[:upper:]' '[:lower:]' | uniq | node index.js
```
