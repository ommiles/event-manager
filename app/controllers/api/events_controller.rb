# we've namespaced our code under Api
class Api::EventsController < ApplicationController
    # declaring that our controller will respond to JSON requests
    respond_to :json

    # define controller methods corresponding to the CRUD actions we wish to perform
    def index
        respond_with Event.order(event_date: :DESC)
    end

    def show
        respond_with Event.find(params[:id])
    end

    def create
        respond_with :api, Event.create(event_params)
    end

    def destroy
        respond_with Event.destroy(params[:id])
    end

    def update
        event = Event.find(params['id'])
        event.update(event_params)
        respond_with Event, json: event
    end

    private

    # list which parameters may be used for mass assignment
    def event_params
        params.require(:event).permit(
        :id,
        :event_type,
        :event_date,
        :title,
        :speaker,
        :host,
        :published
        )
    end
end