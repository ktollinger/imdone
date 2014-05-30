![iMDone](https://raw.githubusercontent.com/piascikj/imdone/master/docs/logo.png)  
----

### A task board and wiki in one!

[![Build Status](https://travis-ci.org/piascikj/imdone.png?branch=master)](https://travis-ci.org/piascikj/imdone)
[![Dependency Status](https://gemnasium.com/piascikj/imdone.png)](https://gemnasium.com/piascikj/imdone)
[![Gittip donate button](http://img.shields.io/gittip/piascikj.png)](https://www.gittip.com/piascikj/ "Donate weekly to this project using Gittip")
[![Flattr donate button](http://img.shields.io/flattr/donate.png?color=yellow)](http://flattr.com/thing/1286067/iMDone "Donate monthly to this project using Flattr")

[![NPM](https://nodei.co/npm/imdone.png)](https://nodei.co/npm/imdone/)

----
iMDone stand alone
----
iMDone is now available as a stand alone app at [imdone.io](http://imdone.io).
If you're willing to give me good feedback and spread the word I'll issue you a free download code.  
Just [tweet](http://twitter.com/home?status=Give%20me%20imdone%20for%20free%20@imdone_io) to let me know. 

Introduction
----
When working on a software project in code or writing project in markdown, there are always tasks you need to record.
Most people use a separate tool to record tasks and keep track of their progress.  iMDone let's you do it right in your work.

Features
----
- Supports code style comments like this in code files
  - `// FIXME: this is really broken`
- Create tasks in any text file using markdown link syntax like
  - `[Finish the latest blog post](#doing:0)`
  - or with a hashtag `#doing:0 Finish the latest blog post`
- Sort tasks and move them between lists with drag and drop
- Select and move multiple tasks at once
- Reorder lists
- Hide and show lists
- Task filters (Regular Expression syntax) 
- Search (Regular Expression syntax)
- Create, delete and edit files
- Code completion with ctrl+space in editor
- Markdown preview with table of contents
- Syntax highlighting in markdown code blocks 
- [Use gollum link syntax](https://github.com/gollum/gollum/wiki#page-links)
  - Great for managing github wikis
- Execute an event listener for modified files

Quickstart
----
- Install
```
sudo npm install -g imdone
```
- Run iMDone by opening a terminal window, navigate to your local project directory and run...
```
imdone -o
```
- or for help...
```
imdone -h
```
- Open a file by clicking on the folder icon and create a task like this
```
[Use imdone to manage tasks in my project](#done:0)
```
- Or like this
```
When your in the middle of a scentence #todo:0 write a task like this.
```
- Or create tasks like this in code files (javascript example)
```
// TODO: Use HashMap instead of HashTable
```
- Add another project by navigating to the project directory in the terminal and run...
```
imdone
```

Configuration
----
After running imdone for the first time, modify .imdone/imdone.json in your project directory.  The default config looks like this.  Your imdone.json will extend this.
```javascript
{
  "exclude": [
    "^(node_modules|bower_components|\\.imdone|target|build)\\/?|\\.(git|svn)|\\~$|\\.(jpg|png|gif|swp|ttf|otf)$"
  ],
  "watcher": true,
  "lists": [],
  "marked": {
    "gfm": true,
    "tables": true,
    "breaks": false,
    "pedantic": false,
    "sanitize": true,
    "smartLists": true,
    "langPrefix": "language-"
  }
}
```

Plugins
----
More to come on this, but here's a sample.
Check out [imdone-echo-plugin](https://www.npmjs.org/package/imdone-echo-plugin)

How you can help
----
If you like iMDone and want to help me make it better, you can make a contribution at Gittip.  Every donation is very much appreciated.  

[![Support via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.1.0/dist/gittip.png)](https://www.gittip.com/piascikj/)

If you have some spare time, then there is no better way to help an open source project than to get involved in one of the following ways.

- Help diagnose and report problems
- Suggest fixes by sending in patches
- Improve the code
- Help with unit and end-to-end testing
- Provide peer support on our forum
- Publish an article on your blog (send the link) to educate others regarding some aspect of the project
- Help with missing documentation

Tips
----
### Tasks are sorted by the number after the colon
### Keep tasks in code  
```javascript
//[this is a todo task in javascript code](#todo:0)
```

###Embed a filter link in a task
```
[Filter by [src/main/java](#filter/src/main/java)](#filters:0)
```  
This would create a filters list containing this task and a link that will populate the filter box with *src/main/java*

### Keep the .imdone folder in source control!
- It contains your configuration and list order

### If tracking a large number of files
  - Increase the "watch handle limit" to 512k**
  - As root edit /etc/sysctl.conf, add the following line
```
fs.inotify.max_user_watches = 524288
```
  - Apply the change
```
sudo sysctl -p
```

### Checkout a github wiki to manage with imdone
  - If the github clone url is https://github.com/piascikj/imdone.git then
```
git clone https://github.com/piascikj/imdone.wiki.git
```

Common Errors
----
- If you are using bower in your project be sure to exclude the directory defined in your .bowerrc file (usually bower_components), otherwise you'll end up with too many open files errors.

See it in action!
----
Fork this repository and run imdone in your local copy.  I use imdone for keeping track of imdone development.

Migrating from older versions
----
If you're migrating from an older version of iMDone the configuration is in a new place.  It's still in the .imdone 
folder, but it's now in JSON format and lists are also stored there.
Because it's in JSON format, you'll have to escape the '\' character in your excludes.

Testing
----
- I use iMDone every day on Ubuntu 13.04 and the latest version of chrome.  It should work on any machine that has nodejs and npm installed and for auto update of boards, a browser that supports websockets.
- I us [jasmine](http://pivotal.github.io/jasmine/) and [mhevery/jasmine-node](https://github.com/mhevery/jasmine-node) for testing.

Change Log
----
### 1.2.9
- Fix new list found
- `<Ctrl>+k` for new task
- Allow `#list:0` task syntax

### 1.2.3
- New task is now `<Ctrl>+n`. A little easier for the fingers:)
- Only select tasks that are visible on select all

### 1.2.0
- Now using the [imdone-core](https://www.npmjs.org/package/imdone-core) library
- Tours to get you started
- Create lists without having to create a task
- Add and remove projects in the UI
- Keyboard help with `?` or on Help menu
- Create a new task from the current line with `<Alt>+t`
- List names are in code completion list with `<Ctrl>+<Space>`
- Reopen projects that were open on last close.  This is merged with --dirs or directory imdone was started in.  Can also be editied in `~/.imdone/config.json`
- I had to do away with events to make the configuration JSON, but will consider bringing them back if there is enough demand.

### 1.1.3
- Add delay to sortable elements

### 1.1.1
- Fix line number of match

### 1.0.7
- Update events for better push updates

### 1.0.4
- Add callback to start for embedding

### 1.0.2
- Fix bug for rename list when code style comments don't have a sort order

### 1.0.1
- Fix firefox dropdown display bug

### 1.0.0
- Fix refresh on file rename, create, or delete
- Add support for code style tasks
- Fix browser open for imdone running on another port

### 0.6.6
- Hide archive and filter buttons when swithing projects

### 0.6.5
- Add archiving of tasks to existing archive or deleted list or create archive list
- Add filter by selected tasks filenames
- Allow regex in filter

### 0.6.4
- Add batch move tasks

### 0.5.6
- Add copy button to preview

### 0.5.2
- Fix valid task check for filetypes without a symbol

### 0.5.1
- Fix file save if modified and clicking on a search result
- Fix file route interpretation of preview boolean
