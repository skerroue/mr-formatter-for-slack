# MR Formatter for Slack

Generate the MR link for Slack

## Prerequisites

To use this extension correctly, please go to your Slack settings :
`Preferences` > `Advanced` and check `Format messages with tags`.

## How to install

**Chrome**

You can directly install the extension from the [Chrome web store](https://chromewebstore.google.com/detail/mr-formatter-for-slack/noflchnfamoejamlhkofbpgclnlbfika)

**Other navigators**

You need to install [Tampermonkey](https://www.tampermonkey.net/) (or another script manager). Then you can go to the dashboard and create a new script. Paste the content from the file `other-navigators/full-script.js`.

Since you won't have the extension popup like Chrome, if you want to edit the default tag, you can update the variable `defaultTag` on the script with the right tag (line 15).

## Use

A Slack icon will appear next to the title of your MRs on Gitlab. Simply click on it to copy the text to your clipboard.
