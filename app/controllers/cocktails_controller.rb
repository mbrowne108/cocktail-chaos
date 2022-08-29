class CocktailsController < ApplicationController
    def index
        render json: Cocktail.all, status: 200
    end

    def show
        cocktail = find_cocktail
        render json: cocktail, status: 200
    end

    private

    def find_cocktail
        Cocktail.find_by(id: params[:id])
    end
end
