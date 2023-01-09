//homework-1
var userSeries = {
    name: "Wednesday",
    releaseDate: "November 23,2022",
    genres: "Comedy,Crime,Fantasy,Mystery",
    mainActor: "Jenna Ortega As Wednesday Addams,Emma Myers As Enid Sinclair,Percy Hynes White As Xavier Thorpe,Hunter Doohan As Tyler Galpin,Gwendoline Christie As Principal Larissa Weems,Christina Ricci As Marilyn Thornhill",
    episodes:  {
        episodesGuide: "Episodes-9>1.'Wednesday's Child Is Full of Woe',2.'Woe Is the Loneliest Number',3.'Friend or Woe',4.'Woe What a Night',5.'You Reap What You Woe',6.'Quid Pro Woe',7.'If You Don't Woe Me by Now',8.'A Murder of Woes'"
    },
    countryOfOrigin: "Country-United States",
    officialSite: "https://www.netflix.com/kg-ru/title/81231974",
};
console.log("Series:"+userSeries.name+",release date:"+userSeries.releaseDate);
console.log("Cast:"+userSeries.mainActor);
console.log("'Wednesday' "+userSeries.episodes.episodesGuide);



//homework-2
let day = "monday"
switch (day) {
    case "Monday":
    case "monday":
        console.log("и так monday - Понедельник");
        break;
    case "Tuesday":
    case "tuesday":
        console.log("и так tuesday - Вторник");
        break;
    case "Wednesday":
    case "wednesday":
        console.log("и так wednesday - Среда");
        break;
    case "Thursday":
    case "thursday":
        console.log("и так thursday - Четверг");
        break;
    case "Friday":
    case "friday":
        console.log("и так friday - Пятница");
        break;
    case "Saturday":
    case "saturday":
        console.log("и так saturday - Суббота");
        break;
    case "Sunday":
    case "sunday":
        console.log("и так sunday - Воскресенье");
        break;
    default:
        console.log("ERROR")
}