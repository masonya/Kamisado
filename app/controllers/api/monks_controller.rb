class Api::MonksController < Api::ApplicationController
  def index
    monks = Monk.all


    monks_collection = []

    monks.each do |monk|
      monks_collection << monk.collect_position_monks
    end


    render json: monks_collection

  end


  def show
    monk = Monk.find(params[:id])
    render json: monk.collect_position_monks
  end


end
