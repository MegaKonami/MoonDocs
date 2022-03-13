/* TODO: Add JSDoc */
/* Bug Test */
declare type Module = object;
declare enum MoveType {
  FORWARD,
  BACKWARD,
  LEFT,
  RIGHT
}
declare interface Item {
  itemName: string;
  displayName: string;
  itemDurablity: string;
  itemDamage: number;
  stackSize: number;
  slot: number;
}
declare interface AxisAlignedBB {
  minX: number;
  minY: number;
  minz: number;
  maxX: number;
  maxY: number;
  maxZ: number;
}
declare interface Entity {
  y: number;
  x: number;
  z: number;
  prevX: number;
  prevY: number;
  prevZ: number;
  yaw: number;
  pitch: number;
  health: number;
  maxHealth: number;
  armor: number;
  height: number;
  hurtTime: number;
  ground: boolean;
  name: string;
  renderName: string;
  entityBoundingBox: AxisAlignedBB;
  collisionBoundingBox: AxisAlignedBB;
}
declare interface Resolution {
  width: number;
  height: number;
  scaleFactor: number;
}
declare const resolution: Resolution;
declare type MotionEvent = 'eventMotion';
declare type PacketID = number;
declare interface Inventory {
  swap(hotbar: number, slot: number, windowId?: number): any,
  shift(slot: number, windowId?: number): any,
  drop(slot: number, stack: number, windowId?: number): any,
  itemStack(slot: number): any,
  itemStackOf(entityName: string, slot: number): any
}
declare interface Player {
  setMovementSpeed(event: MotionEvent, speed: number): void;
  jump(): void;
  setYaw(yaw: number): void;
  setPitch(pitch: number): void;
  usingItem(): boolean;
  swingItem(): void;
  health(): number;
  maxHealt(): number;
  armor(): number;
  setPosition(x: number, y: number, z: number): void;
  message(message: string): void;
  fallDistance(): number;
  name(): string;
  renderName(): string;
  heldItemSlot(): number;
  setHeldItemSlot(slot: number): void;
  hurtTime(): number;
  foodLevel(): number;
  absorption(): number;
  burning(): boolean;
  leftClick(): void;
  rightClick(): void;
  inWater(): boolean;
  inLava(): boolean;
  moving(): boolean;
  onGround(): boolean;
  sneaking(): boolean;
  setSneaking(sneak: boolean): void;
  dead(): boolean;
  sprinting(): boolean;
  riding(): boolean;
  onLadder(): boolean;
  collidedVertically(): boolean;
  collidedHorizontally(): boolean;
  tickExisted(): number;
  addMotion(x: number, y: number, z: number): void;
  setMotion(x: number, y: number, z: number): void;
  setMotionX(x: number): void;
  setMotionY(y: number): void;
  setMotionZ(z: number): void;
  sendPacket(packetId: PacketID, ...args: any): void;
  getX(): number;
  getY(): number;
  getZ(): number;
  setTimer(speed: number): void;
  entityBoundingBox(): AxisAlignedBB;
  collisionBoundingBox(): AxisAlignedBB;
  inCobweb(): boolean;
  yaw(): number;
  pitch(): number;
  anglesTo(x: number, y: number, z: number): number[] | Array<number>
  unlocalizedHeldItemName(): string;
  displayedHeldItemName(): string;
  baseMoveSpeed(): number;
  verticallyCollided(): boolean;
  horizontallyCollided(): boolean;
  itemName(slot: number): string;
  displayName(slot: number): string;
  motionX(): number;
  motionY(): number;
  motionZ(): number;
  windowId(): number;
  setMove(pressed: boolean, moveType: MoveType): any;
  airBorne(): boolean;
  eating(): boolean;
  setFallDistance(): void;
}
declare const player: Player;
declare interface ModuleManager {
  addModule(name: string, description: string, renderName: string): void;
  isModuleEnabled(name: string): boolean;
  addBooleanSetting(module: Module, name: string, defaultValue: boolean): boolean;
  addNumberSetting(module: Module, name: string, value: number, minimum: number, maximum: number, increment: number): void;
  floatSettingValue(module: Module, name: string): number;
  intSettingValue(module: Module, name: string): number;
  setState(moduleName: string, newState: boolean): void;
  toggle(moduleName: string): void;
}
declare const moduleManager: ModuleManager;
declare interface Client {
  fps(): number;
  print(message: string, prefix?: string): void;
  killauraTarget(): Entity;
  uid(): string;
  username(): string;
  targetEntity(entityName: string): void;
  removeTarget(entityName: string): void;
  title(title: string, subtitle: string): void;
  chestName(): string;
}
declare const client: Client;
declare interface World {
  entities(): Array<Entity>;
  livingEntities(): Array<Entity>;
  playerEntities(): Array<Entity>;
  reloadChunks(): void;
  removeEntity(entityName: string): void;
  isBot(entityName: string): boolean
  unlocalizedAt(x: number, y: number, z: number): string;
  localizedAt(x: number, y: number, z: number): string;
}
declare const world: World;
declare interface Render {
  string(text: string, x: number, y: number, color: number): void;
  stringShadowed(text: string, x: number, y: number, color: number): void;
  stringWidth(text: string): number;
  stringHeight(text: string): number;
  rect(x: number, y: number, width, height: number, color: number): void;
  outlinedRect(x: number, y: number, width, height: number, outlineWidth: number, outlineColor: number, color: number): void;
  roundedRect(x: number, y: number, width: number, height: number, radius: number, color: number): void;
  circle(x: number, y: number, radius: number, color: number): void;
  renderEntity(entityName: string, x: number, y: number, scale: number, yaw: number, pitch: number): void;
  outlinedRect(x: number, y: number, width, height: number, radius: number, outlineColor: number, color: number): void;
  renderItemOf(entityName: string, x: number, y: number, slot: number): void;
  renderPosX(): number;
  renderPosY(): number;
  renderPosZ(): number;
  cString(text: string, x: number, y: number, color: number): void;
  cStringShadowed(text: string, x: number, y: number, color: number): void;
  cStringWidth(text: string): string;
  cStringHeight(text: string): string;
}
declare const render: Render;