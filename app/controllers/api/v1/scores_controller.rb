module Api::V1
  class ScoresController < ApplicationController
    def show
      @image = Image.find(params[:id])
      render json: @image.to_json(:include => {:characters => {:only => [:id, :name, :x_location, :y_location]}})
    end

    def create
      puts 'HELLLLLLLO 5'
      puts params
      @image = Image.find(params[:image_id])
      @score = @image.scores.build(params.require(:score).permit(:name, :seconds, :image_id))
      
      if @score.save
        render json: @image.scores
      else
        render json: @score.errors, status: :unprocessable_entity
      end
      puts 'HEELLLO 4'

      # @score = Client.new(params[:score])
    end
  end

  private


end