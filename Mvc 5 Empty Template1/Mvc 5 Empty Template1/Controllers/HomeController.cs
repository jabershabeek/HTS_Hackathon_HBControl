using System;
using System.Web.Mvc;

namespace Mvc_5_Empty_Template1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public bool ChangeStatus(string d1Status)
        {
            bool _isOn = Convert.ToBoolean(d1Status);
            if (_isOn)
                _isOn = false;
            return _isOn;
        }

        public int IncreaseTemp(string currenttemperature, string isIncrease)
        {
            int _currentTemp = Convert.ToInt32(currenttemperature);
            bool _isIncrease = Convert.ToBoolean(isIncrease);
            if (_isIncrease)
                return ++_currentTemp;
            else
                return --_currentTemp;
        }

    }
}