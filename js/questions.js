class QuestionPlugin extends Phaser.Plugins.BasePlugin {

    constructor (pluginManager)
    {
        super(pluginManager);

        this.quest;
    }

    init ()
    {
        console.log('plugin init');
    }

    quest (quest)
    {
        this.quest = quest

        console.log(this.quest);
    }

    start ()
    {
        console.log('plugin start');

        var eventEmitter = this.game.events;

        eventEmitter.on('step', this.update, this);
    }


    update (time, delta)
    {
        if (this.sprite)
        {
            this.sprite.x -= 0.2 * delta;

            if (this.sprite.x < 0)
            {
                this.sprite.x = 800;
            }

        }
    }

}