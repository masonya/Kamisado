class WelcomController < ApplicationController
  def index
    monks = Monk.all


    @monks_collection = []

    monks.each do |monk|
      @monks_collection << monk.collect_position_monks
    end

  end
end
