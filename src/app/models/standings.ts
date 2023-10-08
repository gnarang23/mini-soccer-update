export interface Standings {
        rank: number
        team: Team
        points: number
        goalsDiff: number
        group: string
        form: string
        status: string
        description: string
        all: GameDetails
        home: GameDetails
        away: GameDetails
        update : string
        }

export interface Team {
        id: number
        name: string
        logo: string
        winner? : boolean
}

export interface GameDetails{
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
}

export interface Goals{
    for: number
    against: number
}