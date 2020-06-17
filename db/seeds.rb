
def drop_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end


def seed_data
  drop_db
  create_players
  create_monks
  create_boards
  create_game_board
end


def create_players
  players = [

    [1, "Black_player"],
    [2, "White_player"]
  ]

  players.each { |player| create_player(player) }
end


def create_player(player)

  player = Player.create!(
    player_id: player[0],
    name: player[1]
  )

  puts "Player with id #{ player.id } created"
end



def create_monks
  monks = [
    ["Black", 1, 1, 0, 0],
    ["Black", 2, 1, 1, 1],
    ["Black", 3, 1, 2, 2],
    ["Black", 4, 1, 3, 3],
    ["Black", 5, 1, 4, 4],
    ["Black", 6, 1, 5, 5],
    ["Black", 7, 1, 6, 6],
    ["Black", 8, 1, 7, 7],
    ["White", 9, 2, 8, 8],
    ["White", 10, 2, 9, 9],
    ["White", 11, 2, 10, 30],
    ["White", 12, 2, 11, 11],
    ["White", 13, 2, 12, 12],
    ["White", 14, 2, 13, 13],
    ["White", 15, 2, 14, 14],
    ["White", 16, 2, 15, 15]
  ]

  monks.each { |monk| create_monk(monk) }
end


def create_monk(monk)

  monk = Monk.create!(
    type: monk[0],
    monk_id: monk[1],
    player_id: monk[2],
    monk_position_x: monk[3],
    monk_position_y: monk[4]
  )

  puts "Monk with id #{ monk.id } created"
end

def create_boards
  Board.create!
end









def create_game_board

  cellsState = [
  {id: 0, monk: true, player: "white", monkColor: "FF814B", monkCSS: "MonkChip"},
  {id: 1, monk: true, player: "white", monkColor: "0018F2", monkCSS: "MonkChip"},
  {id: 2, monk: true, player: "white", monkColor: "9773FF", monkCSS: "MonkChip"},
  {id: 3, monk: true, player: "white", monkColor: "39FF88", monkCSS: "MonkChip"},
  {id: 4, monk: true, player: "white", monkColor: "FBD616", monkCSS: "MonkChip"},
  {id: 5, monk: true, player: "white", monkColor: "02C0FE", monkCSS: "MonkChip"},
  {id: 6, monk: true, player: "white", monkColor: "FF004D", monkCSS: "MonkChip"},
  {id: 7, monk: true, player: "white", monkColor: "C6C6C6", monkCSS: "MonkChip"},
  {id: 8, monk: false, player: "", monkColor: ""},
  {id: 9, monk: false, player: "", monkColor: ""},
  {id: 10, monk: false, player: "", monkColor: ""},
  {id: 11, monk: false, player: "", monkColor: ""},
  {id: 12, monk: false, player: "", monkColor: ""},
  {id: 13, monk: false, player: "", monkColor: ""},
  {id: 14, monk: false, player: "", monkColor: ""},
  {id: 15, monk: false, player: "", monkColor: ""},
  {id: 16, monk: false, player: "", monkColor: ""},
  {id: 17, monk: false, player: "", monkColor: ""},
  {id: 18, monk: false, player: "", monkColor: ""},
  {id: 19, monk: false, player: "", monkColor: ""},
  {id: 20, monk: false, player: "", monkColor: ""},
  {id: 21, monk: false, player: "", monkColor: ""},
  {id: 22, monk: false, player: "", monkColor: ""},
  {id: 23, monk: false, player: "", monkColor: ""},
  {id: 24, monk: false, player: "", monkColor: ""},
  {id: 25, monk: false, player: "", monkColor: ""},
  {id: 26, monk: false, player: "", monkColor: ""},
  {id: 27, monk: false, player: "", monkColor: ""},
  {id: 28, monk: false, player: "", monkColor: ""},
  {id: 29, monk: false, player: "", monkColor: ""},
  {id: 30, monk: false, player: "", monkColor: ""},
  {id: 31, monk: false, player: "", monkColor: ""},
  {id: 32, monk: false, player: "", monkColor: ""},
  {id: 33, monk: false, player: "", monkColor: ""},
  {id: 34, monk: false, player: "", monkColor: ""},
  {id: 35, monk: false, player: "", monkColor: ""},
  {id: 36, monk: false, player: "", monkColor: ""},
  {id: 37, monk: false, player: "", monkColor: ""},
  {id: 38, monk: false, player: "", monkColor: ""},
  {id: 39, monk: false, player: "", monkColor: ""},
  {id: 40, monk: false, player: "", monkColor: ""},
  {id: 41, monk: false, player: "", monkColor: ""},
  {id: 42, monk: false, player: "", monkColor: ""},
  {id: 43, monk: false, player: "", monkColor: ""},
  {id: 44, monk: false, player: "", monkColor: ""},
  {id: 45, monk: false, player: "", monkColor: ""},
  {id: 46, monk: false, player: "", monkColor: ""},
  {id: 47, monk: false, player: "", monkColor: ""},
  {id: 48, monk: false, player: "", monkColor: ""},
  {id: 49, monk: false, player: "", monkColor: ""},
  {id: 50, monk: false, player: "", monkColor: ""},
  {id: 51, monk: false, player: "", monkColor: ""},
  {id: 52, monk: false, player: "", monkColor: ""},
  {id: 53, monk: false, player: "", monkColor: ""},
  {id: 54, monk: false, player: "", monkColor: ""},
  {id: 55, monk: false, player: "", monkColor: ""},
  {id: 56, monk: true, player: "black", monkColor: "C6C6C6", monkCSS: "MonkChip"},
  {id: 57, monk: true, player: "black", monkColor: "FF004D", monkCSS: "MonkChip"},
  {id: 58, monk: true, player: "black", monkColor: "02C0FE", monkCSS: "MonkChip"},
  {id: 59, monk: true, player: "black", monkColor: "FBD616", monkCSS: "MonkChip"},
  {id: 60, monk: true, player: "black", monkColor: "39FF88", monkCSS: "MonkChip"},
  {id: 61, monk: true, player: "black", monkColor: "9773FF", monkCSS: "MonkChip"},
  {id: 62, monk: true, player: "black", monkColor: "0018F2", monkCSS: "MonkChip"},
  {id: 63, monk: true, player: "black", monkColor: "FF814B", monkCSS: "MonkChip"}
].to_json


  gb = GameBoard.create!(
    cells_state: cellsState,
    start_cell_state: 100
  )

  puts "Game board with id #{ gb.id } created"
  puts gb.cells_state
end


seed_data
