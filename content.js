console.log("content script is good");
chrome.runtime.onMessage.addListener(gotMessage);

function buildLINarrowSearch1(companyName, companyID) {
    let encodedCompanyNameURI = "text%3A" + encodeURIComponent(companyName.trim()) + "%2C"
    let encodedCompanyID = "id%3A" + companyID + "%2C"

    let encodedCompany =
      companyID !== "" && encodeURIComponent(companyID) !== "%C2%A0" ?
        encodedCompanyID :
        encodedCompanyNameURI

	return "https://www.linkedin.com/sales/search/people?_ntb=ibSBOnRHQkGENt388xy5cw%3D%3D&query=(recentSearchParam%3A(id%3A2514280068%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ATITLE%2Cvalues%3AList((id%3A153%2Ctext%3AChief%2520Technology%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACTO%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520CTO%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520Chief%2520Technology%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AMD%2520of%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3AManagin%2520Director%2520of%2520Technology%2CselectionType%3AINCLUDED)%2C(id%3A3221%2Ctext%3AChief%2520Technologist%2CselectionType%3AINCLUDED)%2C(id%3A203%2Ctext%3AChief%2520Information%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACIO%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520CIO%2CselectionType%3AINCLUDED)%2C(id%3A14896%2Ctext%3AGlobal%2520Chief%2520Information%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3ACDO%2CselectionType%3AINCLUDED)%2C(id%3A25884%2Ctext%3AChief%2520Digital%2520Officer%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520CDO%2CselectionType%3AINCLUDED)%2C(text%3AGlobal%2520Chief%2520Digital%2520Officer%2CselectionType%3AINCLUDED))%2CselectedSubFilter%3ACURRENT)%2C(type%3ACURRENT_COMPANY%2Cvalues%3AList((" + encodedCompany + "Type%3AINCLUDED)))))&sessionId=l6%2BK2b%2FzQ1qEffu0HFGFiA%3D%3D"
}

function buildLINarrowSearch2(companyName, companyID) {
    let encodedCompanyNameURI = "text%3A" + encodeURIComponent(companyName.trim()) + "%2C"
    let encodedCompanyID = "id%3A" + companyID + "%2C"

    let encodedCompany =
      companyID !== "" && encodeURIComponent(companyID) !== "%C2%A0" ?
        encodedCompanyID :
        encodedCompanyNameURI

    	return "https://www.linkedin.com/sales/search/people?_ntb=gNTIu9KIRf2YPhftrWYlFQ%3D%3D&query=(recentSearchParam%3A(id%3A2514280548%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ASENIORITY_LEVEL%2Cvalues%3AList((id%3A7%2Ctext%3AVP%2CselectionType%3AINCLUDED)%2C(id%3A6%2Ctext%3ADirector%2CselectionType%3AINCLUDED)%2C(id%3A4%2Ctext%3ASenior%2CselectionType%3AINCLUDED)))%2C(type%3ATITLE%2Cvalues%3AList((text%3AIT%2CselectionType%3AINCLUDED)%2C(text%3AInformation%2520Technology%2CselectionType%3AINCLUDED)%2C(id%3A3179%2Ctext%3AInformation%2520Technology%2520Infrastructure%2520Specialist%2CselectionType%3AINCLUDED)%2C(text%3AInfrastructure%2CselectionType%3AINCLUDED)%2C(text%3AShared%2520Services%2CselectionType%3AINCLUDED)%2C(text%3AWorplace%2520Experience%2CselectionType%3AINCLUDED)%2C(text%3ADigital%2520Workplace%2CselectionType%3AINCLUDED)%2C(text%3AEmployee%2520Experience%2CselectionType%3AINCLUDED)%2C(text%3AEmployee%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3ACorporate%2520Technology%2CselectionType%3AINCLUDED)%2C(text%3ABusiness%2520Technology%2CselectionType%3AINCLUDED))%2CselectedSubFilter%3ACURRENT)%2C(type%3ACURRENT_COMPANY%2Cvalues%3AList((" + encodedCompany + "Type%3AINCLUDED)))))&sessionId=nQlAdaqmQaaBvsYRDl5RuQ%3D%3D"
}

function buildLINarrowSearch3(companyName, companyID) {
    let encodedCompanyNameURI = "text%3A" + encodeURIComponent(companyName.trim()) + "%2C"
    let encodedCompanyID = "id%3A" + companyID + "%2C"

    let encodedCompany =
      companyID !== "" && encodeURIComponent(companyID) !== "%C2%A0" ?
        encodedCompanyID :
        encodedCompanyNameURI

    return "https://www.linkedin.com/sales/search/people?_ntb=nQlAdaqmQaaBvsYRDl5RuQ%3D%3D&query=(recentSearchParam%3A(id%3A2514280732%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ASENIORITY_LEVEL%2Cvalues%3AList((id%3A5%2Ctext%3AManager%2CselectionType%3AINCLUDED)%2C(id%3A10%2Ctext%3AOwner%2CselectionType%3AINCLUDED)%2C(id%3A4%2Ctext%3ASenior%2CselectionType%3AINCLUDED)))%2C(type%3ATITLE%2Cvalues%3AList((id%3A3081%2Ctext%3AKnowledge%2520Management%2520Specialist%2CselectionType%3AINCLUDED)%2C(id%3A1978%2Ctext%3AKnowledge%2520Manager%2CselectionType%3AINCLUDED)%2C(id%3A8784%2Ctext%3AManager%2520Knowledge%2520Management%2CselectionType%3AINCLUDED)%2C(id%3A17159%2Ctext%3AHead%2520of%2520Knowledge%2520Management%2CselectionType%3AINCLUDED)%2C(id%3A10772%2Ctext%3ADirector%2520of%2520Knowledge%2520Management%2CselectionType%3AINCLUDED)%2C(text%3AKnowledge%2520Management%2CselectionType%3AINCLUDED)%2C(text%3AIdentity%2CselectionType%3AINCLUDED)%2C(text%3ACloud%2CselectionType%3AINCLUDED)%2C(text%3AServiceNow%2CselectionType%3AINCLUDED)%2C(text%3AOffice365%2CselectionType%3AINCLUDED)%2C(text%3AGoogle%2520Workspace%2CselectionType%3AINCLUDED)%2C(text%3AGoogle%2CselectionType%3AINCLUDED)%2C(text%3AAtlassian%2CselectionType%3AINCLUDED)%2C(text%3AEnterprise%2520Search%2CselectionType%3AINCLUDED)%2C(text%3AIntranet%2CselectionType%3AINCLUDED)%2C(id%3A17729%2Ctext%3AIndividual%2520Contributor%2CselectionType%3AINCLUDED))%2CselectedSubFilter%3ACURRENT)%2C(type%3ACURRENT_COMPANY%2Cvalues%3AList((" + encodedCompany + "Type%3AINCLUDED)))))&sessionId=Cp01uxwtTi%2BC%2BNAm2W5IoQ%3D%3D"

}

function buildLINarrowSearch4(companyName, companyID) {
    let encodedCompanyNameURI = "text%3A" + encodeURIComponent(companyName.trim()) + "%2C"
    let encodedCompanyID = "id%3A" + companyID + "%2C"

    let encodedCompany =
      companyID !== "" && encodeURIComponent(companyID) !== "%C2%A0" ?
        encodedCompanyID :
        encodedCompanyNameURI

	return "https://www.linkedin.com/sales/search/people?_ntb=Cp01uxwtTi%2BC%2BNAm2W5IoQ%3D%3D&query=(recentSearchParam%3A(id%3A2514280548%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ASENIORITY_LEVEL%2Cvalues%3AList((id%3A6%2Ctext%3ADirector%2CselectionType%3AINCLUDED)%2C(id%3A7%2Ctext%3AVP%2CselectionType%3AINCLUDED)%2C(id%3A8%2Ctext%3ACXO%2CselectionType%3AINCLUDED)))%2C(type%3ATITLE%2Cvalues%3AList((text%3AInnovation%2CselectionType%3AINCLUDED))%2CselectedSubFilter%3ACURRENT)%2C(type%3ACURRENT_COMPANY%2Cvalues%3AList((" + encodedCompany + "Type%3AINCLUDED)))))&sessionId=nQlAdaqmQaaBvsYRDl5RuQ%3D%3D"
}

function buildLINarrowSearch5(companyName, companyID) {
    let encodedCompanyNameURI = "text%3A" + encodeURIComponent(companyName.trim()) + "%2C"
    let encodedCompanyID = "id%3A" + companyID + "%2C"

    let encodedCompany =
      companyID !== "" && encodeURIComponent(companyID) !== "%C2%A0" ?
        encodedCompanyID :
        encodedCompanyNameURI
    
    	return "https://www.linkedin.com/sales/search/people?_ntb=nQlAdaqmQaaBvsYRDl5RuQ%3D%3D&query=(filters%3AList((type%3ACURRENT_COMPANY%2Cvalues%3AList((" + encodedCompany + "Type%3AINCLUDED)))%2C(type%3ASENIORITY_LEVEL%2Cvalues%3AList((id%3A6%2CselectionType%3AINCLUDED)%2C(id%3A7%2CselectionType%3AINCLUDED)%2C(id%3A8%2CselectionType%3AINCLUDED)))))&sessionId=2P9Fx2BSRAKjuSoCtPvIOw%3D%3D"
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
            `https://www.google.com/search?q=${foundName} interview ${foundAccount}`,
            `https://www.google.com/search?q="${foundName}" interview ${foundAccount}`,
		`https://www.google.com/search?q="${foundName}" "webinar" ${foundAccount}`,
		`https://www.google.com/search?q="${foundName}" "talk" ${foundAccount}`,
            `https://www.owltail.com/search/"${foundName}"`,
            `https://twitter.com/search?q=${foundName} ${foundAccount}`
            

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
        let foundLinkedInID = document.getElementById("00N3h00000IrtfT_ileinner").textContent;
        let foundLinkedInSalesNavInisghts = document.getElementById("00N3h00000IYwOH_ileinner").textContent;
	    
        let CIOCTO = buildLINarrowSearch1(foundAccount, foundLinkedInID)
	let Execs = buildLINarrowSearch2(foundAccount, foundLinkedInID)
	let Manager_IC = buildLINarrowSearch3(foundAccount, foundLinkedInID)
        let Innovation = buildLINarrowSearch4(foundAccount, foundLinkedInID)
        let AllDecision_Makers = buildLINarrowSearch5(foundAccount, foundLinkedInID)


        let list_goog = [
            	CIOCTO,
		Execs,
		Manager_IC,
		Innovation,
		AllDecision_Makers];
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



