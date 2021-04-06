using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class DeviceDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string OsType { get; set; }
        public int Battery { get; set; }
        public string Memory { get; set; }
    }
}