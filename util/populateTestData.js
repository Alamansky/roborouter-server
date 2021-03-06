const fetch = require("node-fetch");

let populateTestData = async PORT => {
  let res = await fetch(`http://localhost:${PORT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      zmccants: [
        [
          [
            ["*", "Thornton St", "Pittsburgh", "PA", "15204"],
            ["538769", "I-Inside", "391   ROCKWELL AL 415 AC"]
          ]
        ],
        [
          [
            ["3019", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["820556", "I-Inside", "345   ROCKWELL 275 AL TC"]
          ],
          [
            ["3021", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["820536", "I-Inside", "345   ROCKWELL 275 AL TC"]
          ],
          [
            ["3120", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["492420", "I-Inside", "328   AMERICAN 250"]
          ],
          [
            ["3125", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["729651", "I-Inside", "331   LANCASTER 250 AC AL"]
          ],
          [
            ["3152", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["730079", "I-Inside", "331   LANCASTER 250 AC AL"]
          ],
          [
            ["3209", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["730128", "I-Inside", "331   LANCASTER 250 AC AL"]
          ],
          [
            ["3225", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["703544", "I-Inside", "331   LANCASTER 250 AC AL"]
          ],
          [
            ["3253", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["822805", "I-Inside", "345   ROCKWELL 275 AL TC"]
          ],
          [
            ["3255", "Ashlyn St", "Pittsburgh", "PA", "15204"],
            ["678098", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["766", "Sherwood Ave", "Pittsburgh", "PA", "15204"],
            ["667978", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["3216", "Motor St", "Pittsburgh", "PA", "15204"],
            ["664253", "OBO-Outside - Back Of House", "344   ROCKWELL R275 AL"]
          ],
          [
            ["3302", "Motor St", "Pittsburgh", "PA", "15204"],
            ["823970", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ],
        [
          [
            ["558", "Menges St", "Pittsburgh", "PA", "15204"],
            ["634620", "I-Inside", "337   SPRAGUE LF 250 AC"]
          ]
        ],
        [
          [
            ["447", "Stadium St", "Pittsburgh", "PA", "15204"],
            ["704963", "I-Inside", "331   LANCASTER 250 AC AL"]
          ]
        ],
        [
          [
            ["219", "Radcliffe St", "Pittsburgh", "PA", "15204"],
            ["542435", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["301", "Tabor St", "Pittsburgh", "PA", "15204"],
            ["506198", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["316", "Tabor St", "Pittsburgh", "PA", "15204"],
            ["759244", "I-Inside", "329   AMERICAN 250 AC TC"]
          ],
          [
            ["318", "Tabor St", "Pittsburgh", "PA", "15204"],
            ["502432", "I-Inside", "344   ROCKWELL R275 AL"]
          ]
        ],
        [
          [
            ["3328", "Oregon St", "Pittsburgh", "PA", "15204"],
            ["842458", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ],
        [
          [
            ["317", "Walcott St", "Pittsburgh", "PA", "15204"],
            ["679187", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["416", "Sloan Way", "Pittsburgh", "PA", "15204"],
            ["669061", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["115", "Saginaw St", "Pittsburgh", "PA", "15204"],
            ["688868", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["117", "Saginaw St", "Pittsburgh", "PA", "15204"],
            ["401810", "I-Inside", "328   AMERICAN 250"]
          ],
          [
            ["119", "Saginaw St", "Pittsburgh", "PA", "15204"],
            ["689008", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["125", "Saginaw St", "Pittsburgh", "PA", "15204"],
            ["837938", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ],
        [
          [
            ["112", "Sanford St", "Pittsburgh", "PA", "15204"],
            ["694862", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["114", "Sanford St", "Pittsburgh", "PA", "15204"],
            ["548381", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["118", "Earl St", "Pittsburgh", "PA", "15204"],
            ["719231", "I-Inside", "331   LANCASTER 250 AC AL"]
          ],
          [
            ["118  1/2", "Earl St", "Pittsburgh", "PA", "15204"],
            ["759247", "I-Inside", "329   AMERICAN 250 AC TC"]
          ],
          [
            ["120", "Earl St", "Pittsburgh", "PA", "15204"],
            ["538285", "I-Inside", "344   ROCKWELL R275 AL"]
          ]
        ],
        [
          [
            ["1003", "Powell St", "Pittsburgh", "PA", "15204"],
            ["658697", "I-Inside", "337   SPRAGUE LF 250 AC"]
          ],
          [
            ["1007", "Powell St", "Pittsburgh", "PA", "15204"],
            ["736367", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ],
        [
          [
            ["2649", "W Carson St", "Pittsburgh", "PA", "15204"],
            ["502426", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["2801", "W Carson St", "Pittsburgh", "PA", "15204"],
            ["659715", "I-Inside", "337   SPRAGUE LF 250 AC"]
          ],
          [
            ["2825", "W Carson St", "Pittsburgh", "PA", "15204"],
            ["479807", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["3307", "W Carson St", "Pittsburgh", "PA", "15204"],
            ["493949", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["2436", "Glen Mawr Ave", "Pittsburgh", "PA", "15204"],
            ["634426", "I-Inside", "337   SPRAGUE LF 250 AC"]
          ],
          [
            ["3066", "Glen Mawr Ave", "Pittsburgh", "PA", "15204"],
            ["592609", "I-Inside", "344   ROCKWELL R275 AL"]
          ]
        ],
        [
          [
            ["427", "Hammond St", "Pittsburgh", "PA", "15204"],
            ["739490", "I-Inside", "329   AMERICAN 250 AC TC"]
          ],
          [
            ["432", "Hammond St", "Pittsburgh", "PA", "15204"],
            ["755615", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ],
        [
          [
            ["335", "Narcissus Ave", "Pittsburgh", "PA", "15204"],
            ["481340", "OBO-Outside - Back Of House", "344   ROCKWELL R275 AL"]
          ]
        ],
        [
          [
            ["3200", "Brunot Ave", "Pittsburgh", "PA", "15204"],
            ["702653", "I-Inside", "345   ROCKWELL 275 AL TC"]
          ],
          [
            ["3200", "Brunot Ave", "Pittsburgh", "PA", "15204"],
            ["621165", "I-Inside", "344   ROCKWELL R275 AL"]
          ]
        ],
        [
          [
            ["3218", "Sacramento Ave", "Pittsburgh", "PA", "15204"],
            ["717506", "I-Inside", "331   LANCASTER 250 AC AL"]
          ],
          [
            ["3226", "Sacramento Ave", "Pittsburgh", "PA", "15204"],
            ["578548", "I-Inside", "328   AMERICAN 250"]
          ]
        ],
        [
          [
            ["2610", "Glasgow St", "Pittsburgh", "PA", "15204"],
            ["715532", "I-Inside", "345   ROCKWELL 275 AL TC"]
          ],
          [
            ["2620", "Glasgow St", "Pittsburgh", "PA", "15204"],
            ["534707", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["2622", "Glasgow St", "Pittsburgh", "PA", "15204"],
            ["394401", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["2633", "Glasgow St", "Pittsburgh", "PA", "15204"],
            ["640363", "I-Inside", "328   AMERICAN 250"]
          ],
          [
            ["2714", "Glasgow St", "Pittsburgh", "PA", "15204"],
            ["765115", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ],
        [
          [
            ["223", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["426031", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["225", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["820431", "I-Inside", "345   ROCKWELL 275 AL TC"]
          ],
          [
            ["2751", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["615239", "I-Inside", "344   ROCKWELL R275 AL"]
          ],
          [
            ["2914", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["676916", "I-Inside", "328   AMERICAN 250"]
          ],
          [
            ["2918", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["814119", "I-Inside", "329   AMERICAN 250 AC TC"]
          ],
          [
            ["2941", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["673322", "I-Inside", "328   AMERICAN 250"]
          ],
          [
            ["2945", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["657836", "I-Inside", "337   SPRAGUE LF 250 AC"]
          ],
          [
            ["3237", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["491847", "I-Inside", "328   AMERICAN 250"]
          ],
          [
            ["2925", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["735112", "I-Inside", "329   AMERICAN 250 AC TC"]
          ],
          [
            ["2925", "Stafford St", "Pittsburgh", "PA", "15204"],
            ["735256", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ],
        [
          [
            ["609", "Chartiers Ave", "Mckees Rocks", "PA", "15136"],
            ["700192", "I-Inside", "344   ROCKWELL R275 AL"]
          ]
        ],
        [
          [
            ["806", "Rose St", "Mckees Rocks", "PA", "15136"],
            ["757266", "I-Inside", "329   AMERICAN 250 AC TC"]
          ],
          [
            ["808", "Rose St", "Mckees Rocks", "PA", "15136"],
            ["814161", "I-Inside", "329   AMERICAN 250 AC TC"]
          ]
        ]
      ]
    })
  });

  return await res;
};

module.exports = populateTestData;
