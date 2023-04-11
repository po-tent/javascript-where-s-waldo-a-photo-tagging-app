module Api::V1
  class ImagesController < ApplicationController
    def index
      @images = Image.all
      render json: @images
    end

    def show
      @image = Image.find(params[:id])
      render json: @image.to_json(:include => {:characters => {:only => [:id, :name, :x_location, :y_location]}})
    end
  end
end