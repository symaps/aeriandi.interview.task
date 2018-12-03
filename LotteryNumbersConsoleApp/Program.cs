using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace LotteryNumbersConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            LotteryNumGenerator numGen= new LotteryNumGenerator();
            numGen.GenerateNums(6);
            DisplayNumbers(numGen.GeneratedNumbers);

        }

        private static void DisplayNumbers(IEnumerable<int> nums)
        {
            var bgcolour = Console.BackgroundColor;
            var fgColour = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.White;

            foreach (int num in nums)
            {
                Console.BackgroundColor = SelectColour(num);
                Console.Write($"{num} ");
            }
            Console.BackgroundColor = bgcolour;
            Console.ForegroundColor = fgColour;
        }

        private static ConsoleColor SelectColour(int num)
        {
            if (num < 1 || num >49)
            {
                throw (new ArgumentOutOfRangeException());
            }
            if (num <= 9)
                return ConsoleColor.Gray;
            if (num <= 19)
                return ConsoleColor.Blue;
            if (num <= 29)
                return ConsoleColor.Magenta; // can't do pink in a console app
            if (num <= 39)
                return ConsoleColor.Green;
            return ConsoleColor.Yellow;
        }
    }
}
