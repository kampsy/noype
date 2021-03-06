// Copyright 2016 Kampamba Chanda. All rights reserved.
// Email: Kampambachanda@gmail.com
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

function noype(url) {
	var mime = {
		".h++": "text/x-c++hdr",
		".lha": "application/x-lha",
		".c": "text/plain",
		"": "application/octet-stream",
		".tiff": "image/tiff",
		".epsi": "application/postscript",
		".skt": "application/x-koan",
		".icz": "text/calendar",
		".cdy": "application/vnd.cinderella",
		".ttl": "text/turtle",
		".pgp": "application/pgp-encrypted",
		".htm": "text/html",
		".sdc": "application/vnd.stardivision.calc",
		".sdf": "chemical/x-mdl-sdfile",
		".lzx": "application/x-lzx",
		".ins": "application/x-internet-signup",
		".ctab": "chemical/x-cactvs-binary",
		".aifc": "audio/x-aiff",
		".png": "image/png",
		".ice": "x-conference/x-cooltalk",
		".odg": "application/vnd.oasis.opendocument.graphics",
		".pm": "text/x-perl",
		".oza": "application/x-oz-application",
		".tar": "application/x-tar",
		".pac": "application/x-ns-proxy-autoconfig",
		".eml": "message/rfc822",
		".hh": "text/x-c++hdr",
		".jdx": "chemical/x-jcamp-dx",
		".cc": "text/x-c++src",
		".vcs": "text/x-vcalendar",
		".opus": "audio/ogg",
		".moc": "text/x-moc",
		".xul": "application/vnd.mozilla.xul+xml",
		".sis": "application/vnd.symbian.install",
		".tsp": "application/dsptype",
		".stc": "application/vnd.sun.xml.calc.template",
		".m3u8": "application/x-mpegURL",
		".tgz": "application/x-gtar-compressed",
		".fch": "chemical/x-gaussian-checkpoint",
		".json": "application/json",
		".sql": "application/x-sql",
		".jpm": "image/jpm",
		".vrm": "x-world/x-vrml",
		".pfa": "application/x-font",
		".wz": "application/x-wingz",
		".texinfo": "application/x-texinfo",
		".shx": "application/x-qgis",
		".gsm": "audio/x-gsm",
		".csh": "text/x-csh",
		".wp5": "application/vnd.wordperfect5.1",
		".m3u": "audio/x-mpegurl",
		".odi": "application/vnd.oasis.opendocument.image",
		".kpt": "application/x-kpresenter",
		".jmz": "application/x-jmol",
		".hta": "application/hta",
		".pptm": "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
		".info": "application/x-info",
		".bak": "application/x-trash",
		".ra": "audio/x-realaudio",
		".dx": "chemical/x-jcamp-dx",
		".rdf": "application/rdf+xml",
		".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		".lin": "application/bbolin",
		".dxr": "application/x-director",
		".otp": "application/vnd.oasis.opendocument.presentation-template",
		".kwt": "application/x-kword",
		".wad": "application/x-doom",
		".kpr": "application/x-kpresenter",
		".cxx": "text/x-c++src",
		".sik": "application/x-trash",
		".iso": "application/x-iso9660-image",
		".wbmp": "image/vnd.wap.wbmp",
		".smi": "application/smil+xml",
		".scala": "text/x-scala",
		".mopcrt": "chemical/x-mopac-input",
		".rtf": "application/rtf",
		".avi": "video/x-msvideo",
		".old": "application/x-trash",
		".mp3": "audio/mpeg",
		".sxw": "application/vnd.sun.xml.writer",
		".oga": "audio/ogg",
		".tex": "text/x-tex",
		".skm": "application/x-koan",
		".dcr": "application/x-director",
		".kil": "application/x-killustrator",
		".shp": "application/x-qgis",
		".sgml": "text/x-sgml",
		".midi": "audio/midi",
		".wm": "video/x-ms-wm",
		".nbp": "application/mathematica",
		".qtl": "application/x-quicktimeplayer",
		".snd": "audio/basic",
		".aiff": "audio/x-aiff",
		".tr": "application/x-troff",
		".wmd": "application/x-ms-wmd",
		".csm": "chemical/x-csml",
		".tif": "image/tiff",
		".src": "application/x-wais-source",
		".md5": "application/x-md5",
		".kin": "chemical/x-kinemage",
		".cpio": "application/x-cpio",
		".mkv": "video/x-matroska",
		".obj": "application/octet-stream",
		".nc": "application/x-netcdf",
		".sv4cpio": "application/x-sv4cpio",
		".gjc": "chemical/x-gaussian-input",
		".mpe": "video/mpeg",
		".lzh": "application/x-lzh",
		".hwp": "application/x-hwp",
		".isp": "application/x-internet-signup",
		".ppm": "image/x-portable-pixmap",
		".eps": "application/postscript",
		".odm": "application/vnd.oasis.opendocument.text-master",
		".sfv": "text/x-sfv",
		".iges": "model/iges",
		".qgs": "application/x-qgis",
		".t": "application/x-troff",
		".emb": "chemical/x-embl-dl-nucleotide",
		".orc": "audio/csound",
		".mcm": "chemical/x-macmolecule",
		".wmlsc": "application/vnd.wap.wmlscriptc",
		".gpt": "chemical/x-mopac-graph",
		".mop": "chemical/x-mopac-input",
		".x3d": "model/x3d+xml",
		".csf": "chemical/x-cache-csf",
		".msi": "application/x-msi",
		".xcf": "application/x-xcf",
		".eot": "application/vnd.ms-fontobject",
		".ico": "image/vnd.microsoft.icon",
		".spx": "audio/ogg",
		".fbdoc": "application/x-maker",
		".movie": "video/x-sgi-movie",
		".gsf": "application/x-font",
		".sw": "chemical/x-swissprot",
		".silo": "model/mesh",
		".xbm": "image/x-xbitmap",
		".gam": "chemical/x-gamess-input",
		".asc": "text/plain",
		".fig": "application/x-xfig",
		".jam": "application/x-jam",
		".wax": "audio/x-ms-wax",
		".stw": "application/vnd.sun.xml.writer.template",
		".csd": "audio/csound",
		".zmt": "chemical/x-mopac-input",
		".otg": "application/vnd.oasis.opendocument.graphics-template",
		".cdr": "image/x-coreldraw",
		".sitx": "application/x-stuffit",
		".crt": "application/x-x509-ca-cert",
		".srt": "text/plain",
		".a": "application/octet-stream",
		".wvx": "video/x-ms-wvx",
		".smil": "application/smil+xml",
		".wmz": "application/x-ms-wmz",
		".atomsrv": "application/atomserv+xml",
		".orf": "image/x-olympus-orf",
		".fm": "application/x-maker",
		".atom": "application/atom+xml",
		".jad": "text/vnd.sun.j2me.app-descriptor",
		".com": "application/x-msdos-program",
		".oth": "application/vnd.oasis.opendocument.text-web",
		".rd": "chemical/x-mdl-rdfile",
		".cmdf": "chemical/x-cmdf",
		".chm": "chemical/x-chemdraw",
		".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		".ica": "application/x-ica",
		".m1v": "video/mpeg",
		".sd": "chemical/x-mdl-sdfile",
		".pdf": "application/pdf",
		".wmlc": "application/vnd.wap.wmlc",
		".p7r": "application/x-pkcs7-certreqresp",
		".cap": "application/vnd.tcpdump.pcap",
		".mpeg": "video/mpeg",
		".cub": "chemical/x-gaussian-cube",
		".scr": "application/x-silverlight",
		".sxg": "application/vnd.sun.xml.writer.global",
		".nwc": "application/x-nwc",
		".wmls": "text/vnd.wap.wmlscript",
		".epsf": "application/postscript",
		".maker": "application/x-maker",
		".pk": "application/x-tex-pk",
		".me": "application/x-troff-me",
		".etx": "text/x-setext",
		".shtml": "text/html",
		".cpa": "chemical/x-compass",
		".key": "application/pgp-keys",
		".dvi": "application/x-dvi",
		".mhtml": "message/rfc822",
		".asf": "video/x-ms-asf",
		".jpg2": "image/jp2",
		".xlt": "application/vnd.ms-excel",
		".pls": "audio/x-scpls",
		".o": "application/x-object",
		".p7c": "application/pkcs7-mime",
		".moo": "chemical/x-mopac-out",
		".potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
		".ott": "application/vnd.oasis.opendocument.text-template",
		".sd2": "audio/x-sd2",
		".psd": "image/x-photoshop",
		".iii": "application/x-iphone",
		".bsd": "chemical/x-crossfire",
		".ros": "chemical/x-rosdal",
		".exe": "application/x-msdos-program",
		".wma": "audio/x-ms-wma",
		".hdf": "application/x-hdf",
		".so": "application/octet-stream",
		".gtar": "application/x-gtar",
		".zip": "application/zip",
		".kwd": "application/x-kword",
		".java": "text/x-java",
		".apk": "application/vnd.android.package-archive",
		".cdt": "image/x-coreldrawtemplate",
		".cif": "chemical/x-cif",
		".sxm": "application/vnd.sun.xml.math",
		".chrt": "application/x-kchart",
		".gif": "image/gif",
		".fchk": "chemical/x-gaussian-checkpoint",
		".odt": "application/vnd.oasis.opendocument.text",
		".mmd": "chemical/x-macromodel-input",
		".pgn": "application/x-chess-pgn",
		".xwd": "image/x-xwindowdump",
		".cef": "chemical/x-cxf",
		".xml": "application/xml",
		".tk": "text/x-tcl",
		".aif": "audio/x-aiff",
		".xspf": "application/xspf+xml",
		".xsl": "application/xslt+xml",
		".wav": "audio/x-wav",
		".xhtml": "application/xhtml+xml",
		".mng": "video/x-mng",
		".dms": "application/x-dms",
		".xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
		".rm": "audio/x-pn-realaudio",
		".jng": "image/x-jng",
		".wk": "application/x-123",
		".jnlp": "application/x-java-jnlp-file",
		".sxc": "application/vnd.sun.xml.calc",
		".alc": "chemical/x-alchemy",
		".sty": "text/x-tex",
		".prf": "application/pics-rules",
		".jpg": "image/jpeg",
		".xpdl": "application/xml",
		".fb": "application/x-maker",
		".ppam": "application/vnd.ms-powerpoint.addin.macroEnabled.12",
		".pas": "text/x-pascal",
		".swfl": "application/x-shockwave-flash",
		".mpc": "chemical/x-mopac-input",
		".rgb": "image/x-rgb",
		".crw": "image/x-canon-crw",
		".rss": "application/x-rss+xml",
		".mpg": "video/mpeg",
		".rar": "application/rar",
		".xsd": "application/xml",
		".xyz": "chemical/x-xyz",
		".xlam": "application/vnd.ms-excel.addin.macroEnabled.12",
		".jp2": "image/jp2",
		".skp": "application/x-koan",
		".boo": "text/x-boo",
		".sdd": "application/vnd.stardivision.impress",
		".patch": "text/x-diff",
		".djvu": "image/vnd.djvu",
		".ist": "chemical/x-isostar",
		".man": "application/x-troff-man",
		".wsdl": "application/xml",
		".skd": "application/x-koan",
		".xlb": "application/vnd.ms-excel",
		".csml": "chemical/x-csml",
		".class": "application/java-vm",
		".pfx": "application/x-pkcs12",
		".ltx": "text/x-tex",
		".ser": "application/java-serialized-object",
		".sh": "text/x-sh",
		".ram": "audio/x-pn-realaudio",
		".sldm": "application/vnd.ms-powerpoint.slide.macroEnabled.12",
		".lsx": "video/x-la-asf",
		".d": "text/x-dsrc",
		".3gp": "video/3gpp",
		".ogx": "application/ogg",
		".vrml": "x-world/x-vrml",
		".hpp": "text/x-c++hdr",
		".ps": "application/postscript",
		".sce": "application/x-scilab",
		".oda": "application/oda",
		".eps3": "application/postscript",
		".py": "text/plain",
		".es": "application/ecmascript",
		".htc": "text/x-component",
		".wbxml": "application/vnd.wap.wbxml",
		".gf": "application/x-tex-gf",
		".pcx": "image/pcx",
		".rdp": "application/x-rdp",
		".ics": "text/calendar",
		".cpt": "image/x-corelphotopaint",
		".cr2": "image/x-canon-cr2",
		".rxn": "chemical/x-mdl-rxnfile",
		".mesh": "model/mesh",
		".sig": "application/pgp-signature",
		".cab": "application/x-cab",
		".dotm": "application/vnd.ms-word.template.macroEnabled.12",
		".ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
		".cdx": "chemical/x-cdx",
		".cbr": "application/x-cbr",
		".awb": "audio/amr-wb",
		".x3dv": "model/x3d+vrml",
		".msh": "model/mesh",
		".dl": "video/dl",
		".pcf.Z": "application/x-font",
		".cda": "application/x-cdf",
		".txt": "text/plain",
		".sgl": "application/vnd.stardivision.writer-global",
		".sv4crc": "application/x-sv4crc",
		".cer": "chemical/x-cerius",
		".bib": "text/x-bibtex",
		".stl": "application/sla",
		".dmg": "application/x-apple-diskimage",
		".sxd": "application/vnd.sun.xml.draw",
		".csv": "text/csv",
		".mbox": "application/mbox",
		".mmf": "application/vnd.smaf",
		".ots": "application/vnd.oasis.opendocument.spreadsheet-template",
		".sco": "audio/csound",
		".mpga": "audio/mpeg",
		".lyx": "application/x-lyx",
		".shar": "application/x-shar",
		".c3d": "chemical/x-chem3d",
		".pot": "text/plain",
		".ai": "application/postscript",
		".qt": "video/quicktime",
		".frm": "application/x-maker",
		".jar": "application/java-archive",
		".docm": "application/vnd.ms-word.document.macroEnabled.12",
		".vcf": "text/x-vcard",
		".art": "image/x-jg",
		".inp": "chemical/x-gamess-input",
		".dcm": "application/dicom",
		".rb": "application/x-ruby",
		".mif": "application/x-mif",
		".~": "application/x-trash",
		".djv": "image/vnd.djvu",
		".deb": "application/x-debian-package",
		".mvb": "chemical/x-mopac-vib",
		".pnm": "image/x-portable-anymap",
		".c++": "text/x-c++src",
		".pl": "text/x-perl",
		".erf": "image/x-epson-erf",
		".gal": "chemical/x-gaussian-log",
		".amr": "audio/amr",
		".wrl": "x-world/x-vrml",
		".crl": "application/x-pkcs7-crl",
		".mxf": "application/mxf",
		".kmz": "application/vnd.google-earth.kmz",
		".odb": "application/vnd.oasis.opendocument.database",
		".jpeg": "image/jpeg",
		".cod": "application/vnd.rim.cod",
		".mm": "application/x-freemind",
		".hs": "text/x-haskell",
		".gcd": "text/x-pcs-gcd",
		".gan": "application/x-ganttproject",
		".tgf": "chemical/x-mdl-tgf",
		".asn": "chemical/x-ncbi-asn1-spec",
		".hin": "chemical/x-hin",
		".cxf": "chemical/x-cxf",
		".lsf": "video/x-la-asf",
		".gnumeric": "application/x-gnumeric",
		".udeb": "application/x-debian-package",
		".pcf": "application/x-font",
		".pyo": "application/x-python-code",
		".jpx": "image/jpx",
		".flac": "audio/flac",
		".m4a": "audio/mpeg",
		".bmp": "image/x-ms-bmp",
		".kar": "audio/midi",
		".bat": "application/x-msdos-program",
		".ustar": "application/x-ustar",
		".xls": "application/vnd.ms-excel",
		".cls": "text/x-tex",
		".mdb": "application/msaccess",
		".b": "chemical/x-molconn-Z",
		".std": "application/vnd.sun.xml.draw.template",
		".wsc": "text/scriptlet",
		".bin": "application/octet-stream",
		".mpv": "video/x-matroska",
		".ogg": "audio/ogg",
		".sgm": "text/x-sgml",
		".sxi": "application/vnd.sun.xml.impress",
		".diff": "text/x-diff",
		".wmv": "video/x-ms-wmv",
		".book": "application/x-maker",
		".ent": "chemical/x-pdb",
		".sti": "application/vnd.sun.xml.impress.template",
		".ogv": "video/ogg",
		".m3g": "application/m3g",
		".uls": "text/iuls",
		".brf": "text/plain",
		".odf": "application/vnd.oasis.opendocument.formula",
		".tm": "text/texmacs",
		".vms": "chemical/x-vamas-iso14976",
		".mht": "message/rfc822",
		".nb": "application/mathematica",
		".p12": "application/x-pkcs12",
		".wpd": "application/vnd.wordperfect",
		".sda": "application/vnd.stardivision.draw",
		".abw": "application/x-abiword",
		".mpa": "video/mpeg",
		".texi": "application/x-texinfo",
		".dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
		".hxx": "text/x-c++hdr",
		".p": "text/x-pascal",
		".mxu": "video/vnd.mpegurl",
		".ppt": "application/vnd.ms-powerpoint",
		".cu": "application/cu-seeme",
		".mov": "video/quicktime",
		".dv": "video/dv",
		".odc": "application/vnd.oasis.opendocument.chart",
		".ly": "text/x-lilypond",
		".%": "application/x-trash",
		".atomcat": "application/atomcat+xml",
		".onetoc2": "application/onenote",
		".cac": "chemical/x-cache",
		".ods": "application/vnd.oasis.opendocument.spreadsheet",
		".onepkg": "application/onenote",
		".val": "chemical/x-ncbi-asn1-binary",
		".ksh": "text/plain",
		".webm": "video/webm",
		".ief": "image/ief",
		".anx": "application/annodex",
		".text": "text/plain",
		".cat": "application/vnd.ms-pki.seccat",
		".cascii": "chemical/x-cactvs-binary",
		".rpm": "application/x-redhat-package-manager",
		".xslt": "application/xslt+xml",
		".eps2": "application/postscript",
		".pps": "application/vnd.ms-powerpoint",
		".au": "audio/basic",
		".gcf": "application/x-graphing-calculator",
		".7z": "application/x-7z-compressed",
		".wmx": "video/x-ms-wmx",
		".cpp": "text/x-c++src",
		".axa": "audio/annodex",
		".html": "text/html",
		".nef": "image/x-nikon-nef",
		".gamin": "chemical/x-gamess-input",
		".pwz": "application/vnd.ms-powerpoint",
		".vmd": "chemical/x-vmd",
		".ts": "video/MP2T",
		".gcg": "chemical/x-gcg8-sequence",
		".asx": "video/x-ms-asf",
		".igs": "model/iges",
		".bcpio": "application/x-bcpio",
		".lhs": "text/x-literate-haskell",
		".pfb": "application/x-font",
		".pat": "image/x-coreldrawpattern",
		".sdw": "application/vnd.stardivision.writer",
		".dif": "video/dv",
		".prt": "chemical/x-ncbi-asn1-ascii",
		".onetmp": "application/onenote",
		".kml": "application/vnd.google-earth.kml+xml",
		".pbm": "image/x-portable-bitmap",
		".sds": "application/vnd.stardivision.chart",
		".tsv": "text/tab-separated-values",
		".aso": "chemical/x-ncbi-asn1-binary",
		".fli": "video/fli",
		".sisx": "x-epoc/x-sisx-app",
		".cbin": "chemical/x-cactvs-binary",
		".h": "text/plain",
		".sci": "application/x-scilab",
		".mml": "text/mathml",
		".flv": "video/x-flv",
		".vsd": "application/vnd.visio",
		".vcd": "application/x-cdlink",
		".gl": "video/gl",
		".mpega": "audio/mpeg",
		".mcif": "chemical/x-mmcif",
		".one": "application/onenote",
		".gen": "chemical/x-genbank",
		".dll": "application/x-msdos-program",
		".sit": "application/x-stuffit",
		".sid": "audio/prs.sid",
		".ppa": "application/vnd.ms-powerpoint",
		".ras": "image/x-cmu-raster",
		".sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
		".pgm": "image/x-portable-graymap",
		".xltm": "application/vnd.ms-excel.template.macroEnabled.12",
		".xpi": "application/x-xpinstall",
		".appcache": "text/cache-manifest",
		".ez": "application/andrew-inset",
		".wiz": "application/msword",
		".davmount": "application/davmount+xml",
		".cdf": "application/x-cdf",
		".xpm": "image/x-xpixmap",
		".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		".pdb": "chemical/x-pdb",
		".x3db": "model/x3d+binary",
		".xcos": "application/x-scilab-xcos",
		".frame": "application/x-maker",
		".hqx": "application/mac-binhex40",
		".axv": "video/annodex",
		".pcap": "application/vnd.tcpdump.pcap",
		".323": "text/h323",
		".tcl": "text/x-tcl",
		".sct": "text/scriptlet",
		".dir": "application/x-director",
		".mol2": "chemical/x-mol2",
		".jpe": "image/jpeg",
		".thmx": "application/vnd.ms-officetheme",
		".js": "application/javascript",
		".ctx": "chemical/x-ctx",
		".torrent": "application/x-bittorrent",
		".nws": "message/rfc822",
		".latex": "application/x-latex",
		".istr": "chemical/x-isostar",
		".spl": "application/x-futuresplash",
		".mph": "application/x-comsol",
		".odp": "application/vnd.oasis.opendocument.presentation",
		".dot": "application/msword",
		".cml": "chemical/x-cml",
		".cbz": "application/x-cbz",
		".mol": "chemical/x-mdl-molfile",
		".pyc": "application/x-python-code",
		".svgz": "image/svg+xml",
		".mp2": "audio/mpeg",
		".sgf": "application/x-go-sgf",
		".potm": "application/vnd.ms-powerpoint.template.macroEnabled.12",
		".roff": "application/x-troff",
		".woff": "application/x-font-woff",
		".embl": "chemical/x-embl-dl-nucleotide",
		".gjf": "chemical/x-gaussian-input",
		".xlsb": "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
		".doc": "application/msword",
		".jpf": "image/jpx",
		".spc": "chemical/x-galactic-spc",
		".mp4": "video/mp4",
		".svg": "image/svg+xml",
		".gau": "chemical/x-gaussian-input",
		".ppsm": "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
		".mmod": "chemical/x-macromodel-input",
		".rtx": "text/richtext",
		".taz": "application/x-gtar-compressed",
		".cache": "chemical/x-cache",
		".xht": "application/xhtml+xml",
		".xlsm": "application/vnd.ms-excel.sheet.macroEnabled.12",
		".swf": "application/x-shockwave-flash",
		".dat": "application/x-ns-proxy-autoconfig",
		".css": "text/css",
		".wml": "text/vnd.wap.wml",
		".ms": "application/x-troff-ms",
		".mid": "audio/midi",
		".ksp": "application/x-kspread",
		".sha1": "application/x-sha1",
		".xtel": "chemical/x-xtel"
	};

	var len = url.length;
	var count = 0;
	var dotIndex = 0;
	for (var i = (len - 1); i > 0; i--) {
		if (url[i] == "." && count == 0) {
			dotIndex = i;
			count = 1;
		}
	}
	var contentTypeKey = url.substring(dotIndex);
	if (mime[contentTypeKey]) {
		return mime[contentTypeKey];
	}else {
		// The object does not have the key
		return "text/html";
	}
}

module.exports = noype
