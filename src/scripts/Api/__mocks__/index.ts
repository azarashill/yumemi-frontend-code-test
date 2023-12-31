import { type ApiInterface, type Prefecture, type Composition } from '../';

export class Api implements ApiInterface {
  async getPrefectures(): Promise<Prefecture[]> {
    return [
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 2, prefName: '青森県' },
      { prefCode: 3, prefName: '東京都' },
      { prefCode: 4, prefName: 'load' },
      { prefCode: 5, prefName: 'エラー' },
    ];
  }

  async getComposition(prefCode: number): Promise<Composition> {
    if (prefCode === 4) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    if (prefCode === 5) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      throw new Error('エラーが発生しました');
    }
    return {
      総人口: [{ value: 50 * prefCode, year: 1960 }],
      年少人口: [{ value: 10 * prefCode, year: 1960 }],
      生産年齢人口: [{ value: 20 * prefCode, year: 1960 }],
      老年人口: [{ value: 20 * prefCode, year: 1960 }],
    };
  }
}
