<h1 align="center">
  b64viewer 💻
</h1>
<pre align="center">
  This document will introduce you to b64viewer's functionalities and use case.<br>You'll also learn how to install and use b64viewer!</pre>
<hr>
<h3>Navigation</h3>
<pre>
  <a href="#what-is-b64viewer">› What is b64viewer?</a>
  <a href="#requirements">› Requirements</a>
  <a href="#installation">› Installation</a>
</pre>

<h3 id="what-is-b64viewer">What is b64viewer?</h3>
//

<h3 id="requirements">Requirements</h3>
<ul>
  <li>NodeJS</li>
  <li>PNPM</li>
  <li>TypeScript</li>
  <li>Docker & Docker Compose</li>
</ul>

<h3 id="installation">Installation</h3>
<blockquote>
  This Guide is made for Debian (based) systems.
</blockquote>
<h4>Part 1 (Installing NodeJS + PNPM + TypeScript)</h4>
<pre><code>apt-get install nodejs
wget -qO- https://get.pnpm.io/install.sh | sh -
bash
pnpm add typescript -D -w
</code></pre>
<h4>Part 2 (Installing Docker + Docker Compose)</h4>
<pre><code>curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
apt-get install docker-compose
systemctl start docker
</pre></code>
<h4>Part 3 (b64viewer)</h4>
<pre><code>git clone https://github.com/BayonetaTeam/b64viewer
cd b64viewer
pnpm i
</pre></code>


If you want to start the backend, then run <code>pnpm run docker:start</code>. If you want to run it in the background, then run <code>pnpm run docker:deploy</code>.

If you want to stop the backend, then run <code>pnpm run docker:stop</code>.

<h4>Part 4 (Configuration)</h4>
Setup the <code>packages/environment/src/constants.ts</code> file

I'm too lazy for a better documentation bc this API is actually used for private projects but well, open source sounds nice, right? ._.