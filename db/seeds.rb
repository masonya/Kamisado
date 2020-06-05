
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


seed_data
