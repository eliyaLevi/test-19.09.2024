const form = document
  .querySelector("form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
  });

const box1 = document.querySelector(".box-1") as HTMLDivElement;
const table = document.querySelector("#tableKorkinet") as HTMLTableElement;
const tbody = document.createElement("tbody") as HTMLTableSectionElement;
table.appendChild(tbody);

const base_url = "https://nbaserver-q21u.onrender.com/api/filter/";

interface Player {
  position: string;
  twoPercent: Number;
  threePercent: Number;
  points: Number;
  playerName: String;
}

interface req {
  position: string;
  twoPercent: Number;
  threePercent: Number;
  points: Number;
}

//פונקצייה שמביאה את כל השחקנים
async function getPlayeres(req: req): Promise<Player> {
  try {
    const response = await fetch(base_url, {
      method: "POST",
      body: JSON.stringify(req),

      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    renderPlayers(data);
    return data;
} catch (error) {
    console.error("שגיאה בהוספת קורקינט:", error);
  }
  return new console.error("error ssss");
}

//פונקצייה שמציגה לי את כל השחקנים
function renderPlayers(Player: Player[]): void {

    tbody.textContent = ""

  Player.forEach((p) => {
    const trow = document.createElement("tr") as HTMLTableRowElement;
    const tPlayer = document.createElement("td");
    const tPosition = document.createElement("td");
    const tPoints = document.createElement("td");
    const tFG = document.createElement("td");
    const t3P = document.createElement("td");
    const tAction = document.createElement("td");

    const btnAction = document.createElement("button") as HTMLButtonElement;
    btnAction.textContent = "Add Damian to Current Team";
    btnAction.onclick = (event: any) => addPlayer(p);
    btnAction.classList.add("btnAction");

    tPlayer.textContent = p.playerName;
    tPosition.textContent = p.position;
    tPoints.textContent = p.points;
    tFG.textContent = p.twoPercent;
    t3P.textContent = p.threePercent;
    tAction.textContent = btnAction;

    tbody.appendChild(trow);
    trow.appendChild(tPlayer);
    trow.appendChild(tPosition);
    trow.appendChild(tPoints);
    trow.appendChild(tFG);
    trow.appendChild(t3P);
    trow.appendChild(tAction);
    tAction.appendChild(btnAction);
    trow.appendChild(tAction);
  });
}

//פונקצייה שמחפסת שחקנים לפי סינון
async function serchFilter(player:Player):Promise<Player>  {
    const position = document.querySelector(".input-position") as HTMLInputElement;
const points = document.querySelector(".input-points") as HTMLInputElement;
const twoPercent = document.querySelector(
  ".input-twoPercent"
) as HTMLInputElement;
const threePercent = document.querySelector(
  ".input-threePercent"
) as HTMLInputElement;

const req1 = {
    position: position.value,
    twoPercent: Number(twoPercent.value),
    threePercent: Number(threePercent.value),
    points: Number(points.value),
  };

    console.log(req1);
    
    const data = await getPlayeres(req1);
    console.log(data);
    
    return data

}





function addPlayer(p: Player) {
    switch(p.position) { 
        case "PG": { 
           let player = document.querySelector("#player-box1")
           player.textContent = p.playerName

           const threePercent = document.querySelector("#threePercent-box1")
           threePercent.textContent = p.threePercent

           const twoPercent = document.querySelector("#twoPercent-box1")
           twoPercent.textContent = p.twoPercent

           const points = document.querySelector("#points-box1")
           points.textContent = p.points
          break; 
        } 
        case "SG": { 
            let player = document.querySelector("#player-box2")
            player.textContent = p.playerName
 
            const threePercent = document.querySelector("#threePercent-box2")
            threePercent.textContent = p.threePercent
 
            const twoPercent = document.querySelector("#twoPercent-box2")
            twoPercent.textContent = p.twoPercent
 
            const points = document.querySelector("#points-box2")
            points.textContent = p.points
           break; 
         } 
         case "SF": { 
            let player = document.querySelector("#player-box3")
            player.textContent = p.playerName
 
            const threePercent = document.querySelector("#threePercent-box3")
            threePercent.textContent = p.threePercent
 
            const twoPercent = document.querySelector("#twoPercent-box3")
            twoPercent.textContent = p.twoPercent
 
            const points = document.querySelector("#points-box3")
            points.textContent = p.points
           break; 
         } 
         case "PF": { 
            let player = document.querySelector("#player-box4")
            player.textContent = p.playerName
 
            const threePercent = document.querySelector("#threePercent-box4")
            threePercent.textContent = p.threePercent
 
            const twoPercent = document.querySelector("#twoPercent-box4")
            twoPercent.textContent = p.twoPercent
 
            const points = document.querySelector("#points-box4")
            points.textContent = p.points
           break; 
         } 
         case "C": { 
            let player = document.querySelector("#player-box5")
            player.textContent = p.playerName
 
            const threePercent = document.querySelector("#threePercent-box5")
            threePercent.textContent = p.threePercent
 
            const twoPercent = document.querySelector("#twoPercent-box5")
            twoPercent.textContent = p.twoPercent
 
            const points = document.querySelector("#points-box5")
            points.textContent = p.points
           break; 
         } 
       
     } 
    
    console.log(p);
    
}
    

