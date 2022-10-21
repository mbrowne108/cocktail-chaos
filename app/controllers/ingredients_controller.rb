class IngredientsController < ApplicationController
    def index
        render json: Ingredient.all, status: 200
    end

    def show
        ingredient = find_ingredient
        render json: ingredient, status: 200
    end

    def update
        ingredient = find_ingredient
        if ingredient
            ingredient.update!(ingredient_params)
            render json: ingredient
        else
            render json: { error: "Ingredient not found" }, status: :not_found
        end
    end

    private

    def find_ingredient
        Ingredient.find_by(id: params[:id])
    end

    def ingredient_params
        params.permit(:name, :instock)
    end
end
