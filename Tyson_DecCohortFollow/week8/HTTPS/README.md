##HTTPS, TLS, SSL

#SSL (Secure Socket Layer)

developed by netscape in 1995. After 3.0, it was rebranded as TLS (Transport Layer Security) currently, most websites use version 1.2 of TLS. Version 1.3 is on it's way. 

SSL is no longer used anywhere on the internet. Some peiple still refer to SSL when talking about TLS.

what is a protocol? a standardized method of communication. want to know more? google 'OSI Model'

Physical layer is the lowest protocol. Responsible for converting electrical signals into 1's and 0's. (Skipping a few levels:)

 the IP protocol describes network addressing.

 The TCP protocol describes how data can be transmitted reliably, in order, with no errors.(an alternative, used my multiplayer games is UDP. UDP has no error checking, but it's faster)
 
The TLS protocol works on top of the TCP, to secure any protocol that runs on top of TCP.

 The HTTP protocol describes how meaningful requests and responses can describe high-level application data.

 http -> https 
 ftp -> ftps
 smtp(simple mail transfer protocol) -> smtps

 Why do we use TLS? It guarentee's that the server is who they say they are, and their certificate has not been modified.

 TLS guarantees that our communication with the server is encrypted, and cannot be intercepted.

 How is a TLS connection initiated?
 TLS handshake involves the client and server negotiating which version of TLS to use, and what encryption methods to use.

 #Acquiring a TLS certificate.
 1. Buy a domain. Go to a site that is made for developers. Don't go to a place that has host on the end. DON'T GO: Bluehost, hostgator, goDaddy, etc.. (iwantmyname, googledomainnames, )
 2. Find a CA (Certificate authority), and prove to them that you own the domain you say you do. (Let's encrypt)
 3. The CA gives you a certificate, which is cryptographically signed, so that any client can determine that the cert was issued by the CA, and that it was not modified.
 

#Serving https traffic

 Normal http is served on port 80
 Https default port is port 443 (clients connect on port 443)
 Client and server perform TLS handshake, negotiate which encryption methods to use.
 Server sends down their certificate, which contains their public encryption key.
 Client confirms that the certificate was issued by a CA the client trusts, and that it was not tampered with.
Client sends a random message, encrytped with the public key.
Server will echo back the decrypted random messgae, proving that they were able to decrypt it.

#Powerful features

Microphone, Camera, Geolocation, etc, are POWERFUL FEATURES, and can only be used over HTTPS.

#Raphael's Email address: raphael.serota@gmail.com
One-click setup
MEAN on 14.04
$5/month
ssh key? (don't use for now. Raphael did.)

once you have everything mkdir
git init
touch server.js

DNS records
(A) record: most popular. Points a URL to an IP address
(CNAME) record: points a URL to another URL. Commonly used for setting up subdomains, e.g. blog.whatever.com, www.whatever.com, store.whatever.com

raphael is in his iwantmyname domain site and cliecked on manage DNS and then drop down and chose (A) Record
value what IP address should this go to? ex: 138.555.234.132
Hostname leaving it blank.
TTL time to live default value just leave blank

CName setup:
                  A           138.555.234.132
www             CName       thepasswordsisdragons.com   



commandline server.
letsencrypt
letsencrypt certbot: https://certbot.eff.org/

cannot install certificate with the server running so to stop your sever forever stopall

.certbot-auto certonly

How would you like to authenticate with the ACME CA?
1. Place files in webroot directory
2. spin up a temporary webserver

Press 2. 

A for agree.

wouldl you be willing to share your email address?
Normal
Please enter your domain name
tysongerber.com


If you open the readme file it will show you what each file is
privkey.pem: the private key for your certificate.

(we were just looking at the different files that were downloaded)
less  readme
less cert
less ... 

