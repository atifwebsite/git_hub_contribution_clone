
const container_id = document.getElementById("_container");

let greenColorCodes = [
    "#7CFC00",
    "#78AB46",
    "#3B5323",
    "#458B00",
    "#BCED91",
    "#61B329",
    "#5DFC0A",
    "#4CBB17",
    "#4AC948",
    "#00EE00",
    "#33FF33",
    "#00C957",
    ];
    let greenColorCodes2 = [
    "#00FC00",
    "#782222",
    "#3B5323",
    "#400ddd",
    "#2E8B57",  
    "#32CD32",  
    "#90EE90",  // Light Green
    "#98FB98",  // Pale Green
    "#00FF7F",  // Spring Green
    "#8FBC8F",  // Dark Sea Green
    "#66CDAA",  // Medium Aquamarine
    "#556B2F",  // Dark Olive Green
    ];

    const num_of_squres = 70;
    for(let i=0;i< num_of_squres; i++)
    {
        const activity = document.createElement("div");
        activity.classList.add("activity");

        activity.addEventListener("mouseover", () => {
            addColor(activity);
        });
        activity.addEventListener("mouseout", ()=> {
            stickyColor(activity);
        })
        container_id.appendChild(activity);
    }

    function addColor(squreTile)
    {
        const gettingColor =greenColors();
        squreTile.style.backgroundColor = gettingColor;
        squreTile.style.boxshadow = ` 0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;
    }
    function stickyColor(squreTile)
    {
        const gettingColor =greenColors2();
        squreTile.style.backgroundColor = gettingColor;
        squreTile.style.boxshadow = ` 0 0 2px ${gettingColor}, 0 0 10px ${gettingColor}`;

    }
    function greenColors2()
    {
        return greenColorCodes2[Math.floor(Math.random() * greenColorCodes2.length)];
    }

    function greenColors()
    {
        return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
    }




