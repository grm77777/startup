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

To SSH into the server, run `ssh -i production.pem ubuntu@13.217.120.6`.

### Domain Name

Domain name information is accessed in AWS using Route 53. I registered under the domain name `lilplanner.click`. This domain name has been connected to my elastic IP address. 

### Caddy

Caddy is accessed by SSHing into the server. By modifying the rule for handling requests (changing it from port 80 to the domain name), Caddy will ensure port 443 (HTTPS) is always served up. 

## HTML

Interesting things I have learned about HTML

## React

Interesting things I have learned about React
