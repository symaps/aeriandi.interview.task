using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LotteryNumbersConsoleApp
{
    class LotteryNumGenerator
    {
        private const int BALL_RANGE = 49;

        private class Ball
        {
            public int Number { get; set; }
            public bool Selected { get; set; }
        }
        List<Ball> _balls = new List<Ball>();

        public LotteryNumGenerator()
        {

            for (int i = 0; i < BALL_RANGE; ++i)
            {
                _balls.Add(new Ball {Number= i + 1, Selected= false});
            }
        }


        public void GenerateNums(int generateCount)
        {
            Random rnd = new Random();
            for (int i = 0; i < generateCount; ++i)
            {

                int selectedBall;
                do
                {
                    selectedBall = rnd.Next(BALL_RANGE);
                } while (_balls[selectedBall].Selected);
                _balls[selectedBall].Selected = true;
            }

        }

        
    }
}