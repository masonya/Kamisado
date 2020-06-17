class Api::GameBoardsController < Api::ApplicationController
  def index

    game_boards = GameBoard.all
    game_boards_array = []

    game_boards.each do |game_board|
      game_boards_array << game_board
    end

    render json: game_boards_array

  end




  def update
    game_board = GameBoard.find(params[:id])
    game_board.update(game_board_params)


      puts "UPDATEEE"
      render json: game_board
      ActionCable.server.broadcast 'game_channel', game_board.as_json.to_json
      head :ok

  end


  # def update
  #
  #   if @board.update(board_params)
  #       puts "UPDATEEE"
  #       render json: {}
  #   else
  #       render json: {}
  #   end
  #
  # end


  def game_board_params
    params.require(:game_board).permit(:cells_state, :start_cell_state)
  end

  # def create
  #   puts "CREATE"
  #   format.json { }
  # end


  # def show
  #   board = Board.find(params[:id])
  #   render json: board
  # end

end
