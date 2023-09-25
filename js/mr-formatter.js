loadData();
// General data
let emoji;
let defaultTag;

async function loadData (){
  await chrome.storage.local.get(["emoji"]).then((data) => {
    emoji = data.emoji;
    if(['undefined', undefined].includes(emoji)) emoji = ":sparkles:";
  });
  await chrome.storage.local.get(["default_tag"]).then((data) => {
    defaultTag = data.default_tag;
    if(['undefined', undefined].includes(defaultTag)) defaultTag = "@front-reviewer";
  });

   // Add CSS to the body
   $('body').append('<style>.mr-link{cursor:pointer;position:relative;top:-2px;font-size:16px;}.mr-link:hover{opacity:0.7;}.mr-link-text{animation: fadeIn 0.2s;box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);border-radius:4px;position:relative;top:-20px;background-color:white;padding:10px 20px;z-index: 999999;margin:auto;width: fit-content;}</style>');

   // Add elements to the page (button & text)
   $("[data-qa-selector='title_content']").append('<i class="fa-brands fa-slack mr-link"></i>');
   $("body").prepend('<div style="position:fixed;width:100%;z-index:9999;"><p class="mr-link-text" style="display:none;">MR copiée dans le presse papier <span style="margin-left:4px;">🎉</span></p></div>');

   // Handle on click
   $(document).on('click', '.mr-link', function(){

     // Title of the MR
     const title = $("[data-qa-selector='title_content']").text().replaceAll("\n", "").replaceAll("\r", "");

     // Slack Message
     let slackMessage = "*Nouvelle MR* : " + emoji + title + emoji +  "\n";

     // Get asana links
     const asanaUrls = [];
     $("[data-qa-selector='description_content']").find("a").each(function() {
       // Only keep URLs from Asana
       let url = $(this).attr('href')
       if(url.startsWith("https://app.asana.com")) asanaUrls.push(url);
     });

     // Generate Asana text
     let asana = "";

     // If there is more than 1 url, we generate a different text
     if(asanaUrls.length > 1){
       asana = "      :asana: :";
       asanaUrls.forEach((e, index) => {
         asana += " [Lien " + (parseInt(index)+1) + "](" + e + ")";
         if((parseInt(index)+1) !== asanaUrls.length){asana += ","}
       });
     // If we only have 1 url
     } else if(asanaUrls.length === 1) {
       asana += "      :asana: : [Lien](" + asanaUrls[0] + ")"
     }

     // Get current gitlab MR link
     const gitlab = window.location.href;

     // Generate the slack message with gitlab + asana + tag
     slackMessage += ":gitlab: : [Lien](" + gitlab + ")" + asana + "\n" + defaultTag;

     // Save the message into the clipboard
     navigator.clipboard.writeText(slackMessage);

     // Display & hide toast after 2s
     $('.mr-link-text').css('display', 'block');
     setTimeout(()=>{$('.mr-link-text').css('display', 'none')}, 2000);
   });

}

