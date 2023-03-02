{
    "name": "cmde",
    "version": "1.0",
    "manifest_version": 3,
    "description": "sf workflow",
    "background": {
        "service_worker": "background.js"
    },
    "content_scripts":[
        {
            "matches": ["<all_urls>"],
            "js": ["content.js"]
        }
    ],
    "commands": {
        "cmde": {
            "suggested_key": {
                "default": "Ctrl+E"
            },
            "description": "everything"
        },
        "_execute_action": {
            "suggested_key": {
                "default": "Ctrl+Shift+E"
            }
        }
    },
    "action": {
        "default_popup": "popup.html"
      },
    "permissions": ["tabs", "storage"]
}
