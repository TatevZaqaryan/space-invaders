import BaseSceneMediator from './BaseSceneMediator';
import BootScene from './BootScene';
import LoadingScene from './LoadingScene';

export default class LoadingSceneMediator extends BaseSceneMediator<LoadingScene> {
  public static NAME: string = 'LoadingSceneMediator';

  constructor() {
    super(LoadingSceneMediator.name, null);
  }
  public onRegister(): void {
    super.onRegister();
    this.setView();
  }
  public registerNotificationInterests(): void {
    this.subscribeToNotifications(BootScene.LOAD_COMPLETE_NOTIFICATION);
  }
  public handleNotification(notificationName: string): void {
    switch (notificationName) {
      case BootScene.LOAD_COMPLETE_NOTIFICATION:
        this.startScene();
        break;

      default:
        this.handleDefaultNotifications(notificationName);
        break;
    }
  }

  protected setView(): void {
    const scene: LoadingScene = new LoadingScene();
    this.sceneManager.add(scene.constructor.name, scene);
    this.setViewComponent(scene);
  }

  protected setViewComponentListeners(): void {
    super.setViewComponentListeners();
    this.viewComponent.events.on(
      LoadingScene.LOADING_COMPLETE_EVENT,
      this.onLoadComplete,
      this,
    );
  }

  protected onLoadComplete(): void {
    this.sendNotification(LoadingScene.LOADING_COMPLETE_NOTIFICATION);
  }
  private finalizeLoading(): void {
    this.sceneManager.stop(LoadingScene.NAME);
  }
}
