# CS 260 Notes

This file represents what I have learned about web programming. I love web programming! 

- [My startup](https://github.com/grm77777/startup)
- [My simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

### Server

Servers are accessed in AWS using EC2 dashboard. The server I set up for this class, `cs260-startup-base` has been initialized as type t3.micro. (I'm curious to see if that will need to change as the semester goes on!) It is connected to an elastic IP address named `lil-planner` that points to `13.217.120.6`. 

To SSH into the server, run `ssh -i keys/production.pem ubuntu@13.217.120.6`.

### Domain Name

Domain name information is accessed in AWS using Route 53. I registered under the domain name `lilplanner.click`. This domain name has been connected to my elastic IP address. 

### Caddy

Caddy is accessed by SSHing into the server. By modifying the rule for handling requests (changing it from port 80 to the domain name), Caddy will ensure port 443 (HTTPS) is always served up. 

## HTML

### Elements

HTML is broken up in different types of elements. Common types of elements (copied from the course's MasteryLS) are as follows: 

| element | meaning |
|---------|-------|
| `html` | The page container |
| `head` | Header information |
| `title` | Title of the page |
| `meta` | Metadata for the page such as character set or viewport settings |
| `script` | JavaScript reference. Either an external reference or inline |
| `include` | External content reference |
| `body` | The entire content body of the page |
| `header` | Header of the main content |
| `footer` | Footer of the main content |
| `nav` | Navigational inputs |
| `main` | Main content of the page |
| `section` | A section of the main content |
| `aside` | Aside content from the main content |
| `div` | A block division of content |
| `span` | An inline span of content |
| `h1-h9` | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p` | A paragraph of text |
| `b` | Bring attention |
| `table` | Table |
| `tr` | Table row |
| `th` | Table header |
| `td` | Table data |
| `ol`, `ul` | Ordered or unordered list |
| `li` | List item |
| `a` | Anchor the text to a hyperlink |
| `img` | Graphical image reference |
| `dialog` | Interactive component such as a confirmation |
| `form` | A collection of user input |
| `input` | User input field |
| `audio` | Audio content |
| `video` | Video content |
| `svg` | Scalable vector graphic content |
| `iframe` | Inline frame of another HTML page |

### Live Server Extension 

After installing the "Live Server" extension, you can select `Go Live` to launch the HTML files in a browser, allowing you to debug directly in VS Code. 

### Deploying Code

Once the HTML code is ready to be deployed, run the `deployfiles.sh` script. For example, to deploy to startup, run `./scripts/deployFiles.sh -k keys/production.pem -h lilplanner.click -s startup`

## React

Interesting things I have learned about React
