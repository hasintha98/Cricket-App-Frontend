export const scoreChange = (run, wicket) => {
    let match = JSON.parse(sessionStorage.getItem("matchSession"))
    match.score = match.score + (wicket ? 0 : Number(run))
    match.wickets = match.wickets + (wicket ? 1 : 0)
    match.current = match.current + 1
    sessionStorage.setItem("matchSession", JSON.stringify(match))
}