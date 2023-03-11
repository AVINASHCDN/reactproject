import React from "react";
const Cricket=(props)=>
{
    console.log(props);
    return(
        <div className="parentBlock">
    
            <div className="mainBlock">
             <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c244982/rohit-sharma.jpg" alt="" srcset="" />
                 <h2>{props.data[0].Playername}</h2>
                 <h2>{props.data[0].Age}</h2>
                 <h2>{props.data[0].Role}</h2>
                 <h2>{props.data[0].Battingstyle}</h2>
                 <h2>{props.data[0].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c198706/cameron-green.jpg" alt="" srcset="" />
                 <h2>{props.data[1].Playername}</h2>
                 <h2>{props.data[1].Age}</h2>
                 <h2>{props.data[1].Role}</h2>
                 <h2>{props.data[1].Battingstyle}</h2>
                 <h2>{props.data[1].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c170970/jofra-archer.jpg" alt="" srcset="" />
                 <h2>{props.data[2].Playername}</h2>
                 <h2>{props.data[2].Age}</h2>
                 <h2>{props.data[2].Role}</h2>
                 <h2>{props.data[2].Battingstyle}</h2>
                 <h2>{props.data[2].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c170685/jasprit-bumrah.jpg" alt="" srcset="" />
                 <h2>{props.data[3].Playername}</h2>
                 <h2>{props.data[3].Age}</h2>
                 <h2>{props.data[3].Role}</h2>
                 <h2>{props.data[3].Battingstyle}</h2>
                 <h2>{props.data[3].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c244979/suryakumar-yadav.jpg" alt="" srcset="" />
                 <h2>{props.data[4].Playername}</h2>
                 <h2>{props.data[4].Age}</h2>
                 <h2>{props.data[4].Role}</h2>
                 <h2>{props.data[4].Battingstyle}</h2>
                 <h2>{props.data[4].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c154048/arjun-tendulkar.jpg" alt="" srcset="" />
                 <h2>{props.data[5].Playername}</h2>
                 <h2>{props.data[5].Age}</h2>
                 <h2>{props.data[5].Role}</h2>
                 <h2>{props.data[5].Battingstyle}</h2>
                 <h2>{props.data[5].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c226219/ishan-kishan.jpg" alt="" srcset="" />
                 <h2>{props.data[6].Playername}</h2>
                 <h2>{props.data[6].Age}</h2>
                 <h2>{props.data[6].Role}</h2>
                 <h2>{props.data[6].Battingstyle}</h2>
                 <h2>{props.data[6].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c244810/tim-david.jpg" alt="" srcset="" />
                 <h2>{props.data[7].Playername}</h2>
                 <h2>{props.data[7].Age}</h2>
                 <h2>{props.data[7].Role}</h2>
                 <h2>{props.data[7].Battingstyle}</h2>
                 <h2>{props.data[7].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c226302/dewald-brevis.jpg" alt="" srcset="" />
                 <h2>{props.data[8].Playername}</h2>
                 <h2>{props.data[8].Age}</h2>
                 <h2>{props.data[8].Role}</h2>
                 <h2>{props.data[8].Battingstyle}</h2>
                 <h2>{props.data[8].Bowlingstyle}</h2>       
            </div>
            <div className="mainBlock">
                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c155663/riley-meredith.jpg" alt="" srcset="" />
                 <h2>{props.data[9].Playername}</h2>
                 <h2>{props.data[9].Age}</h2>
                 <h2>{props.data[9].Role}</h2>
                 <h2>{props.data[9].Battingstyle}</h2>
                 <h2>{props.data[9].Bowlingstyle}</h2>       
            </div>
             </div>
    )
}
export default Cricket;