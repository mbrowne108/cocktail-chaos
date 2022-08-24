class ApplicationController < ActionController::API

    def hello_world
        render json: { name: "hello world"}
    end
end
