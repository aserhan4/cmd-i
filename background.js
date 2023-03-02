console.log("background is up");

chrome.commands.onCommand.addListener(cmdE);

function cmdE(command, tab) {
    console.log("shortcut worked",tab.id);
    chrome.tabs.sendMessage(tab.id, {type: command}, (r) => {
        console.log(`callback successful ${r.response}`);
        chrome.windows.create({
            state: "fullscreen", 
            url: r.response
        }, (err) => {
            console.log(err);
        });
    });
};
