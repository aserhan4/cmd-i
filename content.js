console.log("content script is good");
chrome.runtime.onMessage.addListener(gotMessage);

function buildLINarrowSearch(companyName, companyID) {
    let encodedCompanyNameURI = "text%3A" + encodeURIComponent(companyName.trim()) + "%2C"
    let encodedCompanyID = "id%3A" + companyID + "%2C"

    let encodedCompany =
      companyID !== "" && encodeURIComponent(companyID) !== "%C2%A0" ?
        encodedCompanyID :
        encodedCompanyNameURI

    return "https://www.linkedin.com/sales/search/people#query=(recentSearchParam%3A(id%3A1428570884%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ATITLE%2Cvalues%3AList((id%3A203%2Ctext%3AChief%2520Information%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACIO%2CselectionType%3AINCLUDED)%2C(id%3A14896%2Ctext%3AGlobal%2520Chief%2520Information%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520CIO%2CselectionType%3AINCLUDED)%2C(id%3A13370%2Ctext%3AGroup%2520Chief%2520Information%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AGroup%2520CIO%2CselectionType%3AINCLUDED)%2C(id%3A153%2Ctext%3AChief%2520Technology%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACTO%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520Chief%2520Technology%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520CTO%2CselectionType%3AINCLUDED)%2C(text%3AGroup%2520Chief%2520Technology%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AGroup%2520CTO%2CselectionType%3AINCLUDED)%2C(id%3A3138%2Ctext%3AChief%2520Information%2520Technology%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACITO%2CselectionType%3AINCLUDED)%2C(text%3ACTIO%2CselectionType%3AINCLUDED)%2C(id%3A25884%2Ctext%3AChief%2520Digital%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACDO%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520Chief%2520Digital%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520CDO%2CselectionType%3AINCLUDED)%2C(text%3AGroup%2520Chief%2520Digital%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AGroup%2520CDO%2CselectionType%3AINCLUDED)%2C(id%3A747%2Ctext%3AVice%2520President%2520Information%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3AVP%2520of%2520IT%2CselectionType%3AINCLUDED)%2C(text%3AAVP%2520Information%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3AAVP%2520IT%2CselectionType%3AINCLUDED)%2C(id%3A4721%2Ctext%3AAssistant%2520Vice%2520President%2520Information%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3AEVP%2520IT%2CselectionType%3AINCLUDED)%2C(text%3AEVP%2520Information%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3AExecutive%2520Vice%2520President%2520Information%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3ASVP%2520of%2520IT%2CselectionType%3AINCLUDED)%2C(text%3ASenior%2520Vice%2520President%2520Information%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3ASVP%2520Information%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3AAVP%2520of%2520IT%2CselectionType%3AINCLUDED)%2C(text%3AEVP%2520of%2520IT%2CselectionType%3AINCLUDED)%2C(text%3ASVP%2520IT%2CselectionType%3AINCLUDED)%2C(text%3AVP%2520Workplace%2520Productivity%2CselectionType%3AINCLUDED)%2C(text%3ASVP%2520Workplace%2520Productivity%2CselectionType%3AINCLUDED)%2C(text%3AAVP%2520Workplace%2520Productivity%2CselectionType%3AINCLUDED)%2C(text%3AVP%2520of%2520Workplace%2520Productivity%2CselectionType%3AINCLUDED)%2C(text%3AVice%2520President%2520of%2520Workplace%2520Productivity%2CselectionType%3AINCLUDED)%2C(id%3A280%2Ctext%3AChief%2520Operating%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACOO%2CselectionType%3AINCLUDED)%2C(id%3A68%2Ctext%3AChief%2520Financial%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACFO%2CselectionType%3AINCLUDED)%2C(id%3A520%2Ctext%3AVice%2520President%2520Of%2520Engineering%2CselectionType%3AINCLUDED)%2C(text%3AVP%2520Engineering%2CselectionType%3AINCLUDED)%2C(text%3AVP%2520of%2520Engineering%2CselectionType%3AINCLUDED)%2C(text%3ASenior%2520Vice%2520President%2520of%2520Engineering%2CselectionType%3AINCLUDED)%2C(text%3ASVP%2520Engineering%2CselectionType%3AINCLUDED)%2C(text%3ASVP%2520of%2520Engineering%2CselectionType%3AINCLUDED)%2C(text%3ACEO%2CselectionType%3AINCLUDED)%2C(id%3A8%2Ctext%3AChief%2520Executive%2520Officer%2CselectionType%3AINCLUDED)%2C(id%3A103%2Ctext%3ACo-Founder%2CselectionType%3AINCLUDED)%2C(text%3ACofounder%2CselectionType%3AINCLUDED)%2C(text%3ACo-Founder%2520and%2520CTO%2CselectionType%3AINCLUDED)%2C(text%3ACofounder%2520and%2520CTO%2CselectionType%3AINCLUDED)%2C(text%3ACo-Founder%2520%2526%2520CTO%2CselectionType%3AINCLUDED)%2C(text%3ACofounder%2520%2526%2520CTO%2CselectionType%3AINCLUDED)%2C(text%3ACTO%2520and%2520Co-founder%2CselectionType%3AINCLUDED)%2C(text%3ACTO%2520and%2520Cofounder%2CselectionType%3AINCLUDED)%2C(text%3ACTO%2520%2526%2520Co-founder%2CselectionType%3AINCLUDED)%2C(text%3ACTO%2520%2526%2520Cofounder%2CselectionType%3AINCLUDED)%2C(text%3ACo-founder%2520and%2520Chief%2520Technology%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACofounder%2520and%2520Chief%2520Technology%2520Officer%2CselectionType%3AINCLUDED))%2CselectedSubFilter%3ACURRENT)%2C(type%3ACURRENT_COMPANY%2Cvalues%3AList((" + encodedCompany + "Type%3AINCLUDED)))))&sessionId=q4UloUacReebbUVjeORI0A%3D%3D"

}

// to change QUERY replace company query with encodedCompany
// ex: "www.abcdef.com/query=abc(text%3AAtolio%2C)def"
//     "www.abcdef.com/query=abc(" + encodedCompany + ")def"


function gotMessage(message, sender, sendResponse) {
    let currentURL = document.URL;

    if (currentURL.startsWith("https://atolio.my.salesforce.com/003")) {
        let d = new Date();
        let foundName = document.getElementById("con2_ileinner").textContent;
        let foundAccount = document.getElementById("con4_ileinner").textContent;
        let foundTitle = document.getElementById("con5_ileinner").textContent;
        let foundLI = document.getElementById("00N3h000007s6Uw_ileinner").innerHTML.split(`"`)[1];
        let foundCampaign = document.getElementById("00N3h00000HxFfp_ileinner").textContent;
        chrome.storage.sync.set({snippet_storage: `${d.toLocaleDateString()} - `});



   // set links
        let list_goog = [
            foundLI.concat("shares/"),
            `https://www.youtube.com/results?search_query=${foundName} ${foundAccount}`,
            `https://www.google.com/search?q=${foundName} ${foundAccount}`,
            `https://www.google.com/search?q="${foundName}" ${foundAccount}`,
            `https://www.google.com/search?q=${foundName} interview`,
            `https://www.google.com/search?q="${foundName}" interview `,
            `https://www.owltail.com/search/"${foundName}"`,
            `https://twitter.com/search?q=${foundName}`
            

        ];

    // if you want to make results from the past year, just add &tbs=qdr:y&sa=X

        if (foundCampaign == "Engineering Recruiting") {
            list_goog = [
                `https://www.google.com/search?q="${foundName}" ${foundAccount}&tbs=qdr:y&sa=X`,
                `https://www.google.com/search?q="${foundName}" ${foundAccount} interview`,
                `https://www.google.com/search?q="${foundName}" ${foundAccount} podcast`,
                `https://twitter.com/search?q=${foundName} ${foundAccount}`
            ]
        };

        sendResponse({response: list_goog})
    } else if (currentURL.startsWith("https://atolio.my.salesforce.com/001")) {
	let keywords = ["executive leadership","CEO"];

        let d = new Date();
        let foundAccount = document.getElementById("acc2_ileinner").textContent.replace("[View Hierarchy]", "").trim();
        let foundWebsite = document.getElementById("acc12_ileinner").textContent.split("Sfdc")[0];
        let foundLinkedInID = document.getElementById("00N3h00000IrtfT_ileinner").textContent;
        let foundLinkedInSalesNavInisghts = document.getElementById("00N3h00000IYwOH_ileinner").textContent;
        let foundGoodFitLInkedInID = document.getElementById("00N3h00000IYpmP_ileinner").textContent

        let narrowSearchWithCompany = buildLINarrowSearch(foundAccount, foundLinkedInID)

        let list_goog = [
            `https://www.google.com/search?q=${foundAccount}`,
            foundLinkedInSalesNavInisghts,
            `https://www.layoffs.fyi`,
            `https://www.google.com/search?q=${foundAccount}+stock`,
            foundWebsite,
            `https://www.linkedin.com/sales/search/people?_ntb=AZfSLoh0QhSYRhLA39ym4g%3D%3D&query=(recentSearchParam%3A(id%3A1914310690%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ASENIORITY_LEVEL%2Cvalues%3AList((id%3A6%2CselectionType%3AINCLUDED)%2C(id%3A7%2CselectionType%3AINCLUDED)%2C(id%3A8%2CselectionType%3AINCLUDED)))%2C(type%3ACURRENT_COMPANY%2Cvalues%3AList((id%3A${foundGoodFitLInkedInID}%2CselectionType%3AINCLUDED)))))&sessionId=2zPCJosYSXyfMFMF82y3Ew%3D%3D`,
            narrowSearchWithCompany];
        for (item of keywords) {
            list_goog.push(`https://www.google.com/search?q=${foundAccount} ${item}`)
        };


        chrome.storage.sync.set({snippet_storage: `${d.toLocaleDateString()} - `});
        sendResponse({response: list_goog});
    } else {
        let selText = document.getSelection().toString();
        chrome.storage.sync.get(["snippet_storage"], function(result) {
            if (selText) {
                chrome.storage.sync.set({snippet_storage: `${result.snippet_storage}(${currentURL}) "${selText}"\n`})
                chrome.runtime.sendMessage({selection: selText, type: message})
            };
        });
    }
}
