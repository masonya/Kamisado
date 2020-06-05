class Api::BoardsController < Api::ApplicationController
  def index


    boards = Board.all
    boards_array = []

    boards.each do |board|
      boards_array << board.as_json
    end

    render json: boards_array
  end




  def update
    board = Board.find(params[:id])
    board.update(board_params)

    puts "UPDATEEE"
    render json: {}


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


  def board_params
    params.require(:board).permit(:b1X, :b1Y, :b1Position)
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






def show
  board = Board.find(params[:id])
  render json: board
end
