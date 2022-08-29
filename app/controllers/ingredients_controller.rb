class IngredientsController < ApplicationController
    def index
        render json: Ingredient.all, status: 200
    end

    def show
        ingredient = find_ingredient
        render json: ingredient, status: 200
    end

    private

    def find_ingredient
        Ingredient.find_by(id: params[:id])
    end
end
