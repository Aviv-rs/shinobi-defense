import { Sprite, Stage, TilingSprite } from '@inlet/react-pixi';
import { Spawnable } from './cmps/spawnable';
import { Tower } from './cmps/tower';

function App() {
  return (
    <div className="App">
      <Stage width={700} height={700}>
        <TilingSprite
          image={'./imgs/grass-tile.png'}
          width={700}
          height={700}
          tilePosition={{ x: 100, y: 150 }}
        />
        <Tower x={350} y={50} />
        <Spawnable />
      </Stage>
    </div>
  );
}

export default App;
